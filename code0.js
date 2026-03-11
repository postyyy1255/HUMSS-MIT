gdjs.Starting_32SceneCode = {};
gdjs.Starting_32SceneCode.localVariables = [];
gdjs.Starting_32SceneCode.idToCallbackMap = new Map();
gdjs.Starting_32SceneCode.GDMENUSCRNObjects1= [];
gdjs.Starting_32SceneCode.GDMENUSCRNObjects2= [];
gdjs.Starting_32SceneCode.GDStartbtnObjects1= [];
gdjs.Starting_32SceneCode.GDStartbtnObjects2= [];


gdjs.Starting_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Startbtn"), gdjs.Starting_32SceneCode.GDStartbtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Starting_32SceneCode.GDStartbtnObjects1.length;i<l;++i) {
    if ( gdjs.Starting_32SceneCode.GDStartbtnObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Starting_32SceneCode.GDStartbtnObjects1[k] = gdjs.Starting_32SceneCode.GDStartbtnObjects1[i];
        ++k;
    }
}
gdjs.Starting_32SceneCode.GDStartbtnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15073308);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Episode1", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

}


};

gdjs.Starting_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Starting_32SceneCode.GDMENUSCRNObjects1.length = 0;
gdjs.Starting_32SceneCode.GDMENUSCRNObjects2.length = 0;
gdjs.Starting_32SceneCode.GDStartbtnObjects1.length = 0;
gdjs.Starting_32SceneCode.GDStartbtnObjects2.length = 0;

gdjs.Starting_32SceneCode.eventsList0(runtimeScene);
gdjs.Starting_32SceneCode.GDMENUSCRNObjects1.length = 0;
gdjs.Starting_32SceneCode.GDMENUSCRNObjects2.length = 0;
gdjs.Starting_32SceneCode.GDStartbtnObjects1.length = 0;
gdjs.Starting_32SceneCode.GDStartbtnObjects2.length = 0;


return;

}

gdjs['Starting_32SceneCode'] = gdjs.Starting_32SceneCode;
