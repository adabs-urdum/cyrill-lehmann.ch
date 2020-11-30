import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
import "babylonjs-materials";

class Head {
    constructor(init) {
        console.log("new Head");

        this.ready = false;

        this.loader = init.loader;

        this.headObj = null;
        this.headStep = 0;
        this.headSpeed = 0.005;

        this.engine = new BABYLON.Engine(document.querySelector(".head"), true);
        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        this.camera = new BABYLON.UniversalCamera(
            "camera",
            new BABYLON.Vector3(0, 90, 520),
            this.scene
        );
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
        // this.hemisphericLight.groundColor = new BABYLON.Color3(1, 1, 1);
        // this.hemisphericLight.diffuse = new BABYLON.Color3(1, 1, 1);

        this.spotLightFront = new BABYLON.SpotLight(
            "spotLightFront",
            new BABYLON.Vector3(0, 0, 400),
            new BABYLON.Vector3(0, 0, 0),
            Math.PI * 2,
            0,
            this.scene
        );
        this.spotLightFront.intensity = 1;

        this.addEventListeners();
    }

    addEventListeners = () => {
        window.addEventListener("resize", this.resizeEngine);
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

        this.assetsManager = new BABYLON.AssetsManager(this.scene);
        this.assetsManager.useDefaultLoadingScreen = false;

        const meshTask = this.assetsManager.addMeshTask(
            "mesh task",
            "",
            "../dist/obj/",
            "head3dReduced.obj"
        );

        meshTask.onSuccess = function(task) {
            // console.log(task);
            _this.headObj = task.loadedMeshes[0];
            _this.headObj.material.emissiveColor = new BABYLON.Color3(0, 0, 0);
            _this.headObj.material.specularColor = new BABYLON.Color3(0, 0, 0);
            _this.headObj.material.diffuseTexture.hasAlpha = true;
            _this.headObj.material.backFaceCulling = false;
            _this.headObj.rotation.y = -1;
            // _this.headObj.position.y = 100;
            _this.scene.registerBeforeRender(_this.rotateHead);

            _this.headObj.material.alpha = 0;
            _this.scene.registerBeforeRender(_this.fadeIn);
        };
        meshTask.onError = function(task, message, exception) {
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
                "sphereUpper", {
                    segments: 4,
                    diameter: 0.1,
                },
                this.scene
            );
            upper.visibility = 0.1;

            const left = BABYLON.MeshBuilder.CreateSphere(
                "sphereUpper", {
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
        this.engine.runRenderLoop(() => {
            if (this.scene.isActiveMesh(upper)) {
                upper.position.y += 5;
                this.upperLimit = upper.position.y;
            }

            if (this.scene.isActiveMesh(left)) {
                left.position.x += 5;
                this.leftLimit = left.position.x;
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
        const movement = Math.sin(this.headStep) / 3 + 0.5;
        this.headStep += this.headSpeed;
        this.headObj.rotation.y = Math.PI / 3.5 - (Math.PI / 2) * movement;
    };
}

export default Head;