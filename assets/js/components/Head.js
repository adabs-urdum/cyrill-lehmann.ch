import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
import "babylonjs-materials";

class Head {
  constructor(init) {
    console.log("new Head");

    this.ready = false;
    this.isSafariDesktop = false;

    this.loader = init.loader;

    this.headObj = null;
    this.headStep = 0;
    this.headSpeed = 0.005;

    this.engine = new BABYLON.Engine(document.querySelector(".head"), true);
    this.engine.getCaps().highPrecisionShaderSupported = true;
    this.scene = new BABYLON.Scene(this.engine);
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    this.camera = new BABYLON.UniversalCamera(
      "camera",
      new BABYLON.Vector3(0, 60, 530),
      this.scene
    );
    this.setCameraPosition();
    this.camera.setTarget(BABYLON.Vector3.Zero());
    this.camera.lowerRadiusLimit = 400;
    this.camera.upperRadiusLimit = 400;

    this.hemisphericLight = new BABYLON.HemisphericLight(
      "hemisphericLight",
      new BABYLON.Vector3(0, 200, 0),
      this.scene
    );
    this.hemisphericLight.groundColor = new BABYLON.Color3(0.6, 0.8, 1);
    this.hemisphericLight.diffuse = new BABYLON.Color3(0.6, 0.8, 1);
    this.hemisphericLight.intensity = 0.5;

    this.addEventListeners();
  }

  addEventListeners = () => {
    if (!this.isSafariDesktop) {
      window.addEventListener("resize", this.resizeEngine);
      window.addEventListener("resize", this.setCameraPosition);
    }
  };

  setCameraPosition = () => {
    const windowWidth = window.innerWidth;
    if (this.headObj) {
      this.headObj.material.emissiveColor = new BABYLON.Color3(0.9, 0.9, 0.9);
    }

    if (windowWidth >= 1980) {
      // console.log("1980");
      this.camera.position.z = 1000 - (windowWidth - 1980) / 50;
    } else if (windowWidth > 1440) {
      // console.log("1440");
      this.camera.position.z = 880 - (windowWidth - 1440) / 50;
    } else if (windowWidth > 1024) {
      // console.log("1024");
      this.camera.position.z = 700 + (windowWidth - 1024);
    } else if (windowWidth > 768) {
      // console.log("768");
      this.camera.position.z = 700;
    } else if (windowWidth > 500) {
      // console.log("500");
      this.camera.position.z = 700;

      if (this.headObj) {
        this.headObj.material.emissiveColor = new BABYLON.Color3(0.8, 0.8, 0.8);
      }
    } else {
      this.camera.position.z = 1000;
    }
  };

  fadeIn = () => {
    if (this.headObj.material.alpha <= 1) {
      this.headObj.material.alpha += 0.02;
    } else {
      window.setTimeout(() => {
        this.ready = true;
      }, 500);
      this.scene.unregisterBeforeRender(this.fadeIn);
    }
  };

  onLoaderReady = () => {
    const _this = this;

    const uA = navigator.userAgent;
    const vendor = navigator.vendor;
    if (
      /Safari/i.test(uA) &&
      /Apple Computer/.test(vendor) &&
      !/Mobi|Android/i.test(uA)
    ) {
      //Desktop Safari
      this.isSafariDesktop = true;
    }

    this.assetsManager = new BABYLON.AssetsManager(this.scene);
    this.assetsManager.useDefaultLoadingScreen = false;

    const meshTask = this.assetsManager.addMeshTask(
      "mesh task",
      "",
      "../dist/obj/",
      "head3dReduced.obj"
    );

    meshTask.onSuccess = function (task) {
      // console.log(task);
      _this.headObj = task.loadedMeshes[0];
      _this.headObj.material.emissiveColor = new BABYLON.Color3(0.8, 0.8, 0.8);
      _this.headObj.material.specularColor = new BABYLON.Color3(0, 0, 0);
      _this.headObj.material.diffuseTexture.hasAlpha = true;
      _this.headObj.material.backFaceCulling = false;
      _this.headObj.rotation.y = -1;
      _this.scene.registerBeforeRender(_this.rotateHead);

      _this.headObj.material.alpha = 0;
    };
    meshTask.onError = function (task, message, exception) {
      console.log("error");
      console.log(message);
    };

    this.assetsManager.onProgress = (
      remainingCount,
      totalCount,
      lastFinishedTask
    ) => {
      // console.log(remainingCount, totalCount);
    };

    this.assetsManager.load();

    this.assetsManager.onFinish = (tasks) => {
      this.resizeEngine();

      const upper = BABYLON.MeshBuilder.CreateSphere(
        "sphereUpper",
        {
          segments: 4,
          diameter: 0.1,
        },
        this.scene
      );
      upper.visibility = 0.1;

      const left = BABYLON.MeshBuilder.CreateSphere(
        "sphereUpper",
        {
          segments: 4,
          diameter: 0.1,
        },
        this.scene
      );
      left.visibility = 0.1;

      this.startRenderLoop(left, upper);
    };
  };

  startRenderLoop = (left, upper) => {
    let oldLeft = 0;
    let oldTop = 0;
    this.engine.runRenderLoop(() => {
      if (this.scene.isActiveMesh(upper)) {
        upper.position.y += 5;
        this.upperLimit = upper.position.y;
      }

      if (this.scene.isActiveMesh(left)) {
        left.position.x += 5;
        this.leftLimit = left.position.x;
      }

      if (this.oldTop && this.upperLimit && this.oldLeft && this.leftLimit) {
        if (
          this.oldTop === this.upperLimit &&
          this.oldLeft === this.leftLimit
        ) {
          this.scene.registerBeforeRender(this.fadeIn);
        }
      }

      if (this.isSafariDesktop) {
        const boundingBox = this.headObj.getBoundingInfo().boundingBox;
        this.headObj.position.y = this.upperLimit - boundingBox.maximum.y * 1.3;
        this.headObj.position.x = this.leftLimit - boundingBox.maximum.x * 2;
      }

      if (this.scene.isActiveMesh(left)) {
        this.oldLeft = left.position.x;
      }

      if (this.scene.isActiveMesh(upper)) {
        this.oldTop = upper.position.y;
      }

      this.scene.render();
    });
  };

  stopRenderLoop = () => {
    this.engine.stopRenderLoop();
  };

  resizeEngine = () => {
    this.engine.resize();
  };

  rotateHead = () => {
    const movement = Math.sin(this.headStep) / 3 + 0.4;
    this.headStep += this.headSpeed;
    this.headObj.rotation.y = Math.PI / 3.5 - (Math.PI / 2) * movement;
  };
}

export default Head;
