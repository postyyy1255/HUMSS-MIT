gdjs.Episode3Code = {};
gdjs.Episode3Code.localVariables = [];
gdjs.Episode3Code.idToCallbackMap = new Map();
gdjs.Episode3Code.GDBACKGROUNDObjects1= [];
gdjs.Episode3Code.GDBACKGROUNDObjects2= [];
gdjs.Episode3Code.GDBACKGROUNDObjects3= [];
gdjs.Episode3Code.GDBACKGROUNDObjects4= [];
gdjs.Episode3Code.GDTITLEObjects1= [];
gdjs.Episode3Code.GDTITLEObjects2= [];
gdjs.Episode3Code.GDTITLEObjects3= [];
gdjs.Episode3Code.GDTITLEObjects4= [];
gdjs.Episode3Code.GDDialogObjects1= [];
gdjs.Episode3Code.GDDialogObjects2= [];
gdjs.Episode3Code.GDDialogObjects3= [];
gdjs.Episode3Code.GDDialogObjects4= [];
gdjs.Episode3Code.GDNextBTNObjects1= [];
gdjs.Episode3Code.GDNextBTNObjects2= [];
gdjs.Episode3Code.GDNextBTNObjects3= [];
gdjs.Episode3Code.GDNextBTNObjects4= [];
gdjs.Episode3Code.GDOptionsObjects1= [];
gdjs.Episode3Code.GDOptionsObjects2= [];
gdjs.Episode3Code.GDOptionsObjects3= [];
gdjs.Episode3Code.GDOptionsObjects4= [];
gdjs.Episode3Code.GDEnterObjects1= [];
gdjs.Episode3Code.GDEnterObjects2= [];
gdjs.Episode3Code.GDEnterObjects3= [];
gdjs.Episode3Code.GDEnterObjects4= [];
gdjs.Episode3Code.GDConfirm_9595TxtObjects1= [];
gdjs.Episode3Code.GDConfirm_9595TxtObjects2= [];
gdjs.Episode3Code.GDConfirm_9595TxtObjects3= [];
gdjs.Episode3Code.GDConfirm_9595TxtObjects4= [];
gdjs.Episode3Code.GDArrowUpObjects1= [];
gdjs.Episode3Code.GDArrowUpObjects2= [];
gdjs.Episode3Code.GDArrowUpObjects3= [];
gdjs.Episode3Code.GDArrowUpObjects4= [];
gdjs.Episode3Code.GDArrowDownObjects1= [];
gdjs.Episode3Code.GDArrowDownObjects2= [];
gdjs.Episode3Code.GDArrowDownObjects3= [];
gdjs.Episode3Code.GDArrowDownObjects4= [];
gdjs.Episode3Code.GDNewTextObjects1= [];
gdjs.Episode3Code.GDNewTextObjects2= [];
gdjs.Episode3Code.GDNewTextObjects3= [];
gdjs.Episode3Code.GDNewTextObjects4= [];
gdjs.Episode3Code.GDScore2Objects1= [];
gdjs.Episode3Code.GDScore2Objects2= [];
gdjs.Episode3Code.GDScore2Objects3= [];
gdjs.Episode3Code.GDScore2Objects4= [];
gdjs.Episode3Code.GDGuadaaObjects1= [];
gdjs.Episode3Code.GDGuadaaObjects2= [];
gdjs.Episode3Code.GDGuadaaObjects3= [];
gdjs.Episode3Code.GDGuadaaObjects4= [];
gdjs.Episode3Code.GDBOXXObjects1= [];
gdjs.Episode3Code.GDBOXXObjects2= [];
gdjs.Episode3Code.GDBOXXObjects3= [];
gdjs.Episode3Code.GDBOXXObjects4= [];
gdjs.Episode3Code.GDOptionsBOXObjects1= [];
gdjs.Episode3Code.GDOptionsBOXObjects2= [];
gdjs.Episode3Code.GDOptionsBOXObjects3= [];
gdjs.Episode3Code.GDOptionsBOXObjects4= [];
gdjs.Episode3Code.GDLoadingObjects1= [];
gdjs.Episode3Code.GDLoadingObjects2= [];
gdjs.Episode3Code.GDLoadingObjects3= [];
gdjs.Episode3Code.GDLoadingObjects4= [];


gdjs.Episode3Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.Episode3Code.GDLoadingObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDLoadingObjects3.length;i<l;++i) {
    if ( !(gdjs.Episode3Code.GDLoadingObjects3[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDLoadingObjects3[k] = gdjs.Episode3Code.GDLoadingObjects3[i];
        ++k;
    }
}
gdjs.Episode3Code.GDLoadingObjects3.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("BOXX"), gdjs.Episode3Code.GDBOXXObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Guadaa"), gdjs.Episode3Code.GDGuadaaObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("TITLE"), gdjs.Episode3Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects3[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects3[i].hide(false);
}
}
}

}


};gdjs.Episode3Code.asyncCallback14623788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Episode3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Loading"), gdjs.Episode3Code.GDLoadingObjects3);

{for(var i = 0, len = gdjs.Episode3Code.GDLoadingObjects3.length ;i < len;++i) {
    gdjs.Episode3Code.GDLoadingObjects3[i].hide();
}
}

{ //Subevents
gdjs.Episode3Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Episode3Code.localVariables.length = 0;
}
gdjs.Episode3Code.idToCallbackMap.set(14623788, gdjs.Episode3Code.asyncCallback14623788);
gdjs.Episode3Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Episode3Code.localVariables);
for (const obj of gdjs.Episode3Code.GDBOXXObjects2) asyncObjectsList.addObject("BOXX", obj);
for (const obj of gdjs.Episode3Code.GDDialogObjects2) asyncObjectsList.addObject("Dialog", obj);
for (const obj of gdjs.Episode3Code.GDGuadaaObjects2) asyncObjectsList.addObject("Guadaa", obj);
for (const obj of gdjs.Episode3Code.GDLoadingObjects1) asyncObjectsList.addObject("Loading", obj);
for (const obj of gdjs.Episode3Code.GDTITLEObjects2) asyncObjectsList.addObject("TITLE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Episode3Code.asyncCallback14623788(runtimeScene, asyncObjectsList)), 14623788, asyncObjectsList);
}
}

}


};gdjs.Episode3Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16842916);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.05);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.03);
}
}

}


};gdjs.Episode3Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode3Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDNextBTNObjects2[i].hide();
}
}

{ //Subevents
gdjs.Episode3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode3Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowUpObjects2[k] = gdjs.Episode3Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16846676);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowDownObjects2[k] = gdjs.Episode3Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16847388);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDEnterObjects2[k] = gdjs.Episode3Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDEnterObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16850092);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option2");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16850804);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16851580);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode3Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16861956);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.05);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.03);
}
}

}


};gdjs.Episode3Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode3Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDNextBTNObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode3Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowUpObjects2[k] = gdjs.Episode3Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16865708);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowDownObjects2[k] = gdjs.Episode3Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16866476);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDEnterObjects2[k] = gdjs.Episode3Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDEnterObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option4");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16869156);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option5");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16869932);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option6");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16870708);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode3Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16881116);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.05);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.03);
}
}

}


};gdjs.Episode3Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode3Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDNextBTNObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode3Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowUpObjects2[k] = gdjs.Episode3Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16884868);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowDownObjects2[k] = gdjs.Episode3Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16885636);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDEnterObjects2[k] = gdjs.Episode3Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDEnterObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option7");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16888316);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option8");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16889092);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option9");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16889868);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
}

}


};gdjs.Episode3Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16900324);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.05);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.03);
}
}

}


};gdjs.Episode3Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode3Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDNextBTNObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode3Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowUpObjects2[k] = gdjs.Episode3Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16904076);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowDownObjects2[k] = gdjs.Episode3Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16904844);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDEnterObjects2[k] = gdjs.Episode3Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDEnterObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option10");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16907524);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option11");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16908300);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option12");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16909076);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode3Code.asyncCallback16916380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Episode3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Episode4", false);
}
gdjs.Episode3Code.localVariables.length = 0;
}
gdjs.Episode3Code.idToCallbackMap.set(16916380, gdjs.Episode3Code.asyncCallback16916380);
gdjs.Episode3Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Episode3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Episode3Code.asyncCallback16916380(runtimeScene, asyncObjectsList)), 16916380, asyncObjectsList);
}
}

}


};gdjs.Episode3Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16919876);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.05);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.03);
}
}

}


};gdjs.Episode3Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode3Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDNextBTNObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrolltext") >= 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDBOXXObjects1, gdjs.Episode3Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDGuadaaObjects1, gdjs.Episode3Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode3Code.GDLoadingObjects1, gdjs.Episode3Code.GDLoadingObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDTITLEObjects1, gdjs.Episode3Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
{for(var i = 0, len = gdjs.Episode3Code.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDLoadingObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.Episode3Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode3Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode3Code.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode3Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode3Code.GDOptionsBOXObjects1, gdjs.Episode3Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode3Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowUpObjects2[k] = gdjs.Episode3Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16923628);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode3Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDArrowDownObjects2[k] = gdjs.Episode3Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16924396);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode3Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode3Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode3Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode3Code.GDEnterObjects2[k] = gdjs.Episode3Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode3Code.GDEnterObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode3Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option13");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16927076);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option14");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16927852);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option15");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16928628);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}
}

}


};gdjs.Episode3Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode3Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode3Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode3Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Episode3Code.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode3Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode3Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode3Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBACKGROUNDObjects1[i].setTexture("PARK.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].getBehavior("Text").setText("S1: Park - Friendship Test");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S1ch3");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects1[i].setTexture("2Ep1S1.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].setColor("217;241;199");
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDLoadingObjects1[i].setTexture("Chapter 2.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode3Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode3Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode3Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode3Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode3Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode3Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode3Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBACKGROUNDObjects1[i].setTexture("GARDEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].getBehavior("Text").setText("S2: Home - Personal Diary");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S2ch3");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects1[i].setTexture("2Ep1S2.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].setColor("198;119;109");
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects1[i].setTexture("RED.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects1[i].setTexture("RED.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode3Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode3Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode3Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode3Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode3Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode3Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode3Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBACKGROUNDObjects1[i].setTexture("SCHOOL1.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].getBehavior("Text").setText("S3: School - Creative Thief");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S3ch3");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects1[i].setTexture("2Ep1S3.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].setColor("198;119;109");
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode3Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode3Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode3Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode3Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode3Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode3Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode3Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBACKGROUNDObjects1[i].setTexture("SCHOOL1.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].getBehavior("Text").setText("S4: School - Confession");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S4ch3");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects1[i].setTexture("2Ep1S4andEp2S2.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].setColor("215;223;247");
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode3Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode3Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode3Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode3Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Episode3Code.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode3Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode3Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode3Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBACKGROUNDObjects1[i].setTexture("CAFE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].getBehavior("Text").setText("S5: Community - Temptation");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S5ch3");
}
{for(var i = 0, len = gdjs.Episode3Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDGuadaaObjects1[i].setTexture("2Ep1S5.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDTITLEObjects1[i].setColor("206;164;130");
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDBOXXObjects1[i].setTexture("BROWN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDOptionsBOXObjects1[i].setTexture("BROWN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode3Code.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.Episode3Code.GDLoadingObjects1[i].setTexture("Loading2.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode3Code.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs.Episode3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Episode3Code.GDBACKGROUNDObjects1.length = 0;
gdjs.Episode3Code.GDBACKGROUNDObjects2.length = 0;
gdjs.Episode3Code.GDBACKGROUNDObjects3.length = 0;
gdjs.Episode3Code.GDBACKGROUNDObjects4.length = 0;
gdjs.Episode3Code.GDTITLEObjects1.length = 0;
gdjs.Episode3Code.GDTITLEObjects2.length = 0;
gdjs.Episode3Code.GDTITLEObjects3.length = 0;
gdjs.Episode3Code.GDTITLEObjects4.length = 0;
gdjs.Episode3Code.GDDialogObjects1.length = 0;
gdjs.Episode3Code.GDDialogObjects2.length = 0;
gdjs.Episode3Code.GDDialogObjects3.length = 0;
gdjs.Episode3Code.GDDialogObjects4.length = 0;
gdjs.Episode3Code.GDNextBTNObjects1.length = 0;
gdjs.Episode3Code.GDNextBTNObjects2.length = 0;
gdjs.Episode3Code.GDNextBTNObjects3.length = 0;
gdjs.Episode3Code.GDNextBTNObjects4.length = 0;
gdjs.Episode3Code.GDOptionsObjects1.length = 0;
gdjs.Episode3Code.GDOptionsObjects2.length = 0;
gdjs.Episode3Code.GDOptionsObjects3.length = 0;
gdjs.Episode3Code.GDOptionsObjects4.length = 0;
gdjs.Episode3Code.GDEnterObjects1.length = 0;
gdjs.Episode3Code.GDEnterObjects2.length = 0;
gdjs.Episode3Code.GDEnterObjects3.length = 0;
gdjs.Episode3Code.GDEnterObjects4.length = 0;
gdjs.Episode3Code.GDConfirm_9595TxtObjects1.length = 0;
gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length = 0;
gdjs.Episode3Code.GDConfirm_9595TxtObjects3.length = 0;
gdjs.Episode3Code.GDConfirm_9595TxtObjects4.length = 0;
gdjs.Episode3Code.GDArrowUpObjects1.length = 0;
gdjs.Episode3Code.GDArrowUpObjects2.length = 0;
gdjs.Episode3Code.GDArrowUpObjects3.length = 0;
gdjs.Episode3Code.GDArrowUpObjects4.length = 0;
gdjs.Episode3Code.GDArrowDownObjects1.length = 0;
gdjs.Episode3Code.GDArrowDownObjects2.length = 0;
gdjs.Episode3Code.GDArrowDownObjects3.length = 0;
gdjs.Episode3Code.GDArrowDownObjects4.length = 0;
gdjs.Episode3Code.GDNewTextObjects1.length = 0;
gdjs.Episode3Code.GDNewTextObjects2.length = 0;
gdjs.Episode3Code.GDNewTextObjects3.length = 0;
gdjs.Episode3Code.GDNewTextObjects4.length = 0;
gdjs.Episode3Code.GDScore2Objects1.length = 0;
gdjs.Episode3Code.GDScore2Objects2.length = 0;
gdjs.Episode3Code.GDScore2Objects3.length = 0;
gdjs.Episode3Code.GDScore2Objects4.length = 0;
gdjs.Episode3Code.GDGuadaaObjects1.length = 0;
gdjs.Episode3Code.GDGuadaaObjects2.length = 0;
gdjs.Episode3Code.GDGuadaaObjects3.length = 0;
gdjs.Episode3Code.GDGuadaaObjects4.length = 0;
gdjs.Episode3Code.GDBOXXObjects1.length = 0;
gdjs.Episode3Code.GDBOXXObjects2.length = 0;
gdjs.Episode3Code.GDBOXXObjects3.length = 0;
gdjs.Episode3Code.GDBOXXObjects4.length = 0;
gdjs.Episode3Code.GDOptionsBOXObjects1.length = 0;
gdjs.Episode3Code.GDOptionsBOXObjects2.length = 0;
gdjs.Episode3Code.GDOptionsBOXObjects3.length = 0;
gdjs.Episode3Code.GDOptionsBOXObjects4.length = 0;
gdjs.Episode3Code.GDLoadingObjects1.length = 0;
gdjs.Episode3Code.GDLoadingObjects2.length = 0;
gdjs.Episode3Code.GDLoadingObjects3.length = 0;
gdjs.Episode3Code.GDLoadingObjects4.length = 0;

gdjs.Episode3Code.eventsList13(runtimeScene);
gdjs.Episode3Code.GDBACKGROUNDObjects1.length = 0;
gdjs.Episode3Code.GDBACKGROUNDObjects2.length = 0;
gdjs.Episode3Code.GDBACKGROUNDObjects3.length = 0;
gdjs.Episode3Code.GDBACKGROUNDObjects4.length = 0;
gdjs.Episode3Code.GDTITLEObjects1.length = 0;
gdjs.Episode3Code.GDTITLEObjects2.length = 0;
gdjs.Episode3Code.GDTITLEObjects3.length = 0;
gdjs.Episode3Code.GDTITLEObjects4.length = 0;
gdjs.Episode3Code.GDDialogObjects1.length = 0;
gdjs.Episode3Code.GDDialogObjects2.length = 0;
gdjs.Episode3Code.GDDialogObjects3.length = 0;
gdjs.Episode3Code.GDDialogObjects4.length = 0;
gdjs.Episode3Code.GDNextBTNObjects1.length = 0;
gdjs.Episode3Code.GDNextBTNObjects2.length = 0;
gdjs.Episode3Code.GDNextBTNObjects3.length = 0;
gdjs.Episode3Code.GDNextBTNObjects4.length = 0;
gdjs.Episode3Code.GDOptionsObjects1.length = 0;
gdjs.Episode3Code.GDOptionsObjects2.length = 0;
gdjs.Episode3Code.GDOptionsObjects3.length = 0;
gdjs.Episode3Code.GDOptionsObjects4.length = 0;
gdjs.Episode3Code.GDEnterObjects1.length = 0;
gdjs.Episode3Code.GDEnterObjects2.length = 0;
gdjs.Episode3Code.GDEnterObjects3.length = 0;
gdjs.Episode3Code.GDEnterObjects4.length = 0;
gdjs.Episode3Code.GDConfirm_9595TxtObjects1.length = 0;
gdjs.Episode3Code.GDConfirm_9595TxtObjects2.length = 0;
gdjs.Episode3Code.GDConfirm_9595TxtObjects3.length = 0;
gdjs.Episode3Code.GDConfirm_9595TxtObjects4.length = 0;
gdjs.Episode3Code.GDArrowUpObjects1.length = 0;
gdjs.Episode3Code.GDArrowUpObjects2.length = 0;
gdjs.Episode3Code.GDArrowUpObjects3.length = 0;
gdjs.Episode3Code.GDArrowUpObjects4.length = 0;
gdjs.Episode3Code.GDArrowDownObjects1.length = 0;
gdjs.Episode3Code.GDArrowDownObjects2.length = 0;
gdjs.Episode3Code.GDArrowDownObjects3.length = 0;
gdjs.Episode3Code.GDArrowDownObjects4.length = 0;
gdjs.Episode3Code.GDNewTextObjects1.length = 0;
gdjs.Episode3Code.GDNewTextObjects2.length = 0;
gdjs.Episode3Code.GDNewTextObjects3.length = 0;
gdjs.Episode3Code.GDNewTextObjects4.length = 0;
gdjs.Episode3Code.GDScore2Objects1.length = 0;
gdjs.Episode3Code.GDScore2Objects2.length = 0;
gdjs.Episode3Code.GDScore2Objects3.length = 0;
gdjs.Episode3Code.GDScore2Objects4.length = 0;
gdjs.Episode3Code.GDGuadaaObjects1.length = 0;
gdjs.Episode3Code.GDGuadaaObjects2.length = 0;
gdjs.Episode3Code.GDGuadaaObjects3.length = 0;
gdjs.Episode3Code.GDGuadaaObjects4.length = 0;
gdjs.Episode3Code.GDBOXXObjects1.length = 0;
gdjs.Episode3Code.GDBOXXObjects2.length = 0;
gdjs.Episode3Code.GDBOXXObjects3.length = 0;
gdjs.Episode3Code.GDBOXXObjects4.length = 0;
gdjs.Episode3Code.GDOptionsBOXObjects1.length = 0;
gdjs.Episode3Code.GDOptionsBOXObjects2.length = 0;
gdjs.Episode3Code.GDOptionsBOXObjects3.length = 0;
gdjs.Episode3Code.GDOptionsBOXObjects4.length = 0;
gdjs.Episode3Code.GDLoadingObjects1.length = 0;
gdjs.Episode3Code.GDLoadingObjects2.length = 0;
gdjs.Episode3Code.GDLoadingObjects3.length = 0;
gdjs.Episode3Code.GDLoadingObjects4.length = 0;


return;

}

gdjs['Episode3Code'] = gdjs.Episode3Code;
