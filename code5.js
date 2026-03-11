gdjs.THE_32ENDCode = {};
gdjs.THE_32ENDCode.localVariables = [];
gdjs.THE_32ENDCode.idToCallbackMap = new Map();
gdjs.THE_32ENDCode.GDBGendObjects1= [];
gdjs.THE_32ENDCode.GDBGendObjects2= [];
gdjs.THE_32ENDCode.GDBGendObjects3= [];
gdjs.THE_32ENDCode.GDBGendObjects4= [];
gdjs.THE_32ENDCode.GDBGendObjects5= [];
gdjs.THE_32ENDCode.GDSCOREEEObjects1= [];
gdjs.THE_32ENDCode.GDSCOREEEObjects2= [];
gdjs.THE_32ENDCode.GDSCOREEEObjects3= [];
gdjs.THE_32ENDCode.GDSCOREEEObjects4= [];
gdjs.THE_32ENDCode.GDSCOREEEObjects5= [];


gdjs.THE_32ENDCode.asyncCallback19669428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Starting Scene", false);
}
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(19669428, gdjs.THE_32ENDCode.asyncCallback19669428);
gdjs.THE_32ENDCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback19669428(runtimeScene, asyncObjectsList)), 19669428, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback19669284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects4);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects4.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects4[i].hide();
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(19669284, gdjs.THE_32ENDCode.asyncCallback19669284);
gdjs.THE_32ENDCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects3) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback19669284(runtimeScene, asyncObjectsList)), 19669284, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback19668820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects3);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects3.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects3[i].getBehavior("Text").setText("You consistently make responsible and ethical choices.");
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(19668820, gdjs.THE_32ENDCode.asyncCallback19668820);
gdjs.THE_32ENDCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects2) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback19668820(runtimeScene, asyncObjectsList)), 19668820, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback12320956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects2);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects2.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects2[i].getBehavior("Text").setText("You are a Model Citizen.");
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(12320956, gdjs.THE_32ENDCode.asyncCallback12320956);
gdjs.THE_32ENDCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects1) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4.5), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback12320956(runtimeScene, asyncObjectsList)), 12320956, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback19662108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Starting Scene", false);
}
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(19662108, gdjs.THE_32ENDCode.asyncCallback19662108);
gdjs.THE_32ENDCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback19662108(runtimeScene, asyncObjectsList)), 19662108, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback16177620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects4);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects4.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects4[i].hide();
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(16177620, gdjs.THE_32ENDCode.asyncCallback16177620);
gdjs.THE_32ENDCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects3) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback16177620(runtimeScene, asyncObjectsList)), 16177620, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback14634268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects3);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects3.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects3[i].getBehavior("Text").setText("You often make good decisions but still have room to grow.");
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(14634268, gdjs.THE_32ENDCode.asyncCallback14634268);
gdjs.THE_32ENDCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects2) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback14634268(runtimeScene, asyncObjectsList)), 14634268, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback16104828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects2);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects2.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects2[i].getBehavior("Text").setText("You are On the Right Path.");
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(16104828, gdjs.THE_32ENDCode.asyncCallback16104828);
gdjs.THE_32ENDCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects1) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4.5), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback16104828(runtimeScene, asyncObjectsList)), 16104828, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback14380516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Starting Scene", false);
}
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(14380516, gdjs.THE_32ENDCode.asyncCallback14380516);
gdjs.THE_32ENDCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback14380516(runtimeScene, asyncObjectsList)), 14380516, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback14651548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects4);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects4.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects4[i].hide();
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(14651548, gdjs.THE_32ENDCode.asyncCallback14651548);
gdjs.THE_32ENDCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects3) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback14651548(runtimeScene, asyncObjectsList)), 14651548, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback14891596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects3);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects3.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects3[i].getBehavior("Text").setText("Some choices need improvement, but you’re learning.");
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(14891596, gdjs.THE_32ENDCode.asyncCallback14891596);
gdjs.THE_32ENDCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects2) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback14891596(runtimeScene, asyncObjectsList)), 14891596, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback11686116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects2);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects2.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects2[i].getBehavior("Text").setText("You are Learning the Right Way.");
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(11686116, gdjs.THE_32ENDCode.asyncCallback11686116);
gdjs.THE_32ENDCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects1) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4.5), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback11686116(runtimeScene, asyncObjectsList)), 11686116, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback14432628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Starting Scene", false);
}
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(14432628, gdjs.THE_32ENDCode.asyncCallback14432628);
gdjs.THE_32ENDCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback14432628(runtimeScene, asyncObjectsList)), 14432628, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback15316484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects4);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects4.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects4[i].hide();
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(15316484, gdjs.THE_32ENDCode.asyncCallback15316484);
gdjs.THE_32ENDCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects3) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback15316484(runtimeScene, asyncObjectsList)), 15316484, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback11398820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects3);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects3.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects3[i].getBehavior("Text").setText("Many decisions may harm others. Think about better choices next time.");
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(11398820, gdjs.THE_32ENDCode.asyncCallback11398820);
gdjs.THE_32ENDCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects2) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback11398820(runtimeScene, asyncObjectsList)), 11398820, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.asyncCallback14989572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects2);

{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects2.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects2[i].getBehavior("Text").setText("You Need Reflection.");
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.THE_32ENDCode.localVariables.length = 0;
}
gdjs.THE_32ENDCode.idToCallbackMap.set(14989572, gdjs.THE_32ENDCode.asyncCallback14989572);
gdjs.THE_32ENDCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.THE_32ENDCode.localVariables);
for (const obj of gdjs.THE_32ENDCode.GDSCOREEEObjects1) asyncObjectsList.addObject("SCOREEE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4.5), (runtimeScene) => (gdjs.THE_32ENDCode.asyncCallback14989572(runtimeScene, asyncObjectsList)), 14989572, asyncObjectsList);
}
}

}


};gdjs.THE_32ENDCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 50);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BGend"), gdjs.THE_32ENDCode.GDBGendObjects1);
gdjs.copyArray(runtimeScene.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects1);
{for(var i = 0, len = gdjs.THE_32ENDCode.GDBGendObjects1.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDBGendObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects1.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects1[i].getBehavior("Text").setText("Congratulations! You got a total score of " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 35);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() <= 49);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BGend"), gdjs.THE_32ENDCode.GDBGendObjects1);
gdjs.copyArray(runtimeScene.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects1);
{for(var i = 0, len = gdjs.THE_32ENDCode.GDBGendObjects1.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDBGendObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects1.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects1[i].getBehavior("Text").setText("Congratulations! You got a total score of " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 20);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() <= 34);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BGend"), gdjs.THE_32ENDCode.GDBGendObjects1);
gdjs.copyArray(runtimeScene.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects1);
{for(var i = 0, len = gdjs.THE_32ENDCode.GDBGendObjects1.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDBGendObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects1.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects1[i].getBehavior("Text").setText("Congratulations! You got a total score of " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() <= 19);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BGend"), gdjs.THE_32ENDCode.GDBGendObjects1);
gdjs.copyArray(runtimeScene.getObjects("SCOREEE"), gdjs.THE_32ENDCode.GDSCOREEEObjects1);
{for(var i = 0, len = gdjs.THE_32ENDCode.GDBGendObjects1.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDBGendObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.THE_32ENDCode.GDSCOREEEObjects1.length ;i < len;++i) {
    gdjs.THE_32ENDCode.GDSCOREEEObjects1[i].getBehavior("Text").setText("Congratulations! You got a total score of " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}

{ //Subevents
gdjs.THE_32ENDCode.eventsList15(runtimeScene);} //End of subevents
}

}


};

gdjs.THE_32ENDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.THE_32ENDCode.GDBGendObjects1.length = 0;
gdjs.THE_32ENDCode.GDBGendObjects2.length = 0;
gdjs.THE_32ENDCode.GDBGendObjects3.length = 0;
gdjs.THE_32ENDCode.GDBGendObjects4.length = 0;
gdjs.THE_32ENDCode.GDBGendObjects5.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects1.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects2.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects3.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects4.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects5.length = 0;

gdjs.THE_32ENDCode.eventsList16(runtimeScene);
gdjs.THE_32ENDCode.GDBGendObjects1.length = 0;
gdjs.THE_32ENDCode.GDBGendObjects2.length = 0;
gdjs.THE_32ENDCode.GDBGendObjects3.length = 0;
gdjs.THE_32ENDCode.GDBGendObjects4.length = 0;
gdjs.THE_32ENDCode.GDBGendObjects5.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects1.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects2.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects3.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects4.length = 0;
gdjs.THE_32ENDCode.GDSCOREEEObjects5.length = 0;


return;

}

gdjs['THE_32ENDCode'] = gdjs.THE_32ENDCode;
