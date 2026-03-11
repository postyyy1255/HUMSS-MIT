gdjs.Episode2Code = {};
gdjs.Episode2Code.localVariables = [];
gdjs.Episode2Code.idToCallbackMap = new Map();
gdjs.Episode2Code.GDBACKGROUNDObjects1= [];
gdjs.Episode2Code.GDBACKGROUNDObjects2= [];
gdjs.Episode2Code.GDBACKGROUNDObjects3= [];
gdjs.Episode2Code.GDBACKGROUNDObjects4= [];
gdjs.Episode2Code.GDTITLEObjects1= [];
gdjs.Episode2Code.GDTITLEObjects2= [];
gdjs.Episode2Code.GDTITLEObjects3= [];
gdjs.Episode2Code.GDTITLEObjects4= [];
gdjs.Episode2Code.GDDialogObjects1= [];
gdjs.Episode2Code.GDDialogObjects2= [];
gdjs.Episode2Code.GDDialogObjects3= [];
gdjs.Episode2Code.GDDialogObjects4= [];
gdjs.Episode2Code.GDNextBTNObjects1= [];
gdjs.Episode2Code.GDNextBTNObjects2= [];
gdjs.Episode2Code.GDNextBTNObjects3= [];
gdjs.Episode2Code.GDNextBTNObjects4= [];
gdjs.Episode2Code.GDOptionsObjects1= [];
gdjs.Episode2Code.GDOptionsObjects2= [];
gdjs.Episode2Code.GDOptionsObjects3= [];
gdjs.Episode2Code.GDOptionsObjects4= [];
gdjs.Episode2Code.GDEnterObjects1= [];
gdjs.Episode2Code.GDEnterObjects2= [];
gdjs.Episode2Code.GDEnterObjects3= [];
gdjs.Episode2Code.GDEnterObjects4= [];
gdjs.Episode2Code.GDConfirm_9595TxtObjects1= [];
gdjs.Episode2Code.GDConfirm_9595TxtObjects2= [];
gdjs.Episode2Code.GDConfirm_9595TxtObjects3= [];
gdjs.Episode2Code.GDConfirm_9595TxtObjects4= [];
gdjs.Episode2Code.GDArrowUpObjects1= [];
gdjs.Episode2Code.GDArrowUpObjects2= [];
gdjs.Episode2Code.GDArrowUpObjects3= [];
gdjs.Episode2Code.GDArrowUpObjects4= [];
gdjs.Episode2Code.GDArrowDownObjects1= [];
gdjs.Episode2Code.GDArrowDownObjects2= [];
gdjs.Episode2Code.GDArrowDownObjects3= [];
gdjs.Episode2Code.GDArrowDownObjects4= [];
gdjs.Episode2Code.GDNewTextObjects1= [];
gdjs.Episode2Code.GDNewTextObjects2= [];
gdjs.Episode2Code.GDNewTextObjects3= [];
gdjs.Episode2Code.GDNewTextObjects4= [];
gdjs.Episode2Code.GDScore2Objects1= [];
gdjs.Episode2Code.GDScore2Objects2= [];
gdjs.Episode2Code.GDScore2Objects3= [];
gdjs.Episode2Code.GDScore2Objects4= [];
gdjs.Episode2Code.GDGuadaaObjects1= [];
gdjs.Episode2Code.GDGuadaaObjects2= [];
gdjs.Episode2Code.GDGuadaaObjects3= [];
gdjs.Episode2Code.GDGuadaaObjects4= [];
gdjs.Episode2Code.GDBOXXObjects1= [];
gdjs.Episode2Code.GDBOXXObjects2= [];
gdjs.Episode2Code.GDBOXXObjects3= [];
gdjs.Episode2Code.GDBOXXObjects4= [];
gdjs.Episode2Code.GDOptionsBOXObjects1= [];
gdjs.Episode2Code.GDOptionsBOXObjects2= [];
gdjs.Episode2Code.GDOptionsBOXObjects3= [];
gdjs.Episode2Code.GDOptionsBOXObjects4= [];
gdjs.Episode2Code.GDLoadingObjects1= [];
gdjs.Episode2Code.GDLoadingObjects2= [];
gdjs.Episode2Code.GDLoadingObjects3= [];
gdjs.Episode2Code.GDLoadingObjects4= [];


gdjs.Episode2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.Episode2Code.GDLoadingObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDLoadingObjects3.length;i<l;++i) {
    if ( !(gdjs.Episode2Code.GDLoadingObjects3[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDLoadingObjects3[k] = gdjs.Episode2Code.GDLoadingObjects3[i];
        ++k;
    }
}
gdjs.Episode2Code.GDLoadingObjects3.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("BOXX"), gdjs.Episode2Code.GDBOXXObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Guadaa"), gdjs.Episode2Code.GDGuadaaObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("TITLE"), gdjs.Episode2Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects3[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects3[i].hide(false);
}
}
}

}


};gdjs.Episode2Code.asyncCallback16621396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Episode2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Loading"), gdjs.Episode2Code.GDLoadingObjects3);

{for(var i = 0, len = gdjs.Episode2Code.GDLoadingObjects3.length ;i < len;++i) {
    gdjs.Episode2Code.GDLoadingObjects3[i].hide();
}
}

{ //Subevents
gdjs.Episode2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Episode2Code.localVariables.length = 0;
}
gdjs.Episode2Code.idToCallbackMap.set(16621396, gdjs.Episode2Code.asyncCallback16621396);
gdjs.Episode2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Episode2Code.localVariables);
for (const obj of gdjs.Episode2Code.GDBOXXObjects2) asyncObjectsList.addObject("BOXX", obj);
for (const obj of gdjs.Episode2Code.GDDialogObjects2) asyncObjectsList.addObject("Dialog", obj);
for (const obj of gdjs.Episode2Code.GDGuadaaObjects2) asyncObjectsList.addObject("Guadaa", obj);
for (const obj of gdjs.Episode2Code.GDLoadingObjects1) asyncObjectsList.addObject("Loading", obj);
for (const obj of gdjs.Episode2Code.GDTITLEObjects2) asyncObjectsList.addObject("TITLE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Episode2Code.asyncCallback16621396(runtimeScene, asyncObjectsList)), 16621396, asyncObjectsList);
}
}

}


};gdjs.Episode2Code.eventsList2 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16700836);
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


};gdjs.Episode2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode2Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDNextBTNObjects2[i].hide();
}
}

{ //Subevents
gdjs.Episode2Code.eventsList1(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowUpObjects2[k] = gdjs.Episode2Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16704596);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowDownObjects2[k] = gdjs.Episode2Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16705308);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDEnterObjects2[k] = gdjs.Episode2Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16708012);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16708724);
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
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16709500);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}
}

}


};gdjs.Episode2Code.eventsList4 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16719908);
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


};gdjs.Episode2Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode2Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDNextBTNObjects2[i].hide();
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
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode2Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowUpObjects2[k] = gdjs.Episode2Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16723660);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowDownObjects2[k] = gdjs.Episode2Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16724428);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDEnterObjects2[k] = gdjs.Episode2Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16727108);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16727884);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16728660);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode2Code.eventsList6 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16739036);
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


};gdjs.Episode2Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode2Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDNextBTNObjects2[i].hide();
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
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode2Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowUpObjects2[k] = gdjs.Episode2Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16742788);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowDownObjects2[k] = gdjs.Episode2Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16743556);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDEnterObjects2[k] = gdjs.Episode2Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16746236);
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
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option8");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16747012);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16747788);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode2Code.eventsList8 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16758204);
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


};gdjs.Episode2Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode2Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDNextBTNObjects2[i].hide();
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
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode2Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowUpObjects2[k] = gdjs.Episode2Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16761956);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowDownObjects2[k] = gdjs.Episode2Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16762724);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDEnterObjects2[k] = gdjs.Episode2Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16765404);
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
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option11");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16766180);
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
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option12");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16766956);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}
}

}


};gdjs.Episode2Code.asyncCallback16774260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Episode2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Episode3", false);
}
gdjs.Episode2Code.localVariables.length = 0;
}
gdjs.Episode2Code.idToCallbackMap.set(16774260, gdjs.Episode2Code.asyncCallback16774260);
gdjs.Episode2Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Episode2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Episode2Code.asyncCallback16774260(runtimeScene, asyncObjectsList)), 16774260, asyncObjectsList);
}
}

}


};gdjs.Episode2Code.eventsList11 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16777756);
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


};gdjs.Episode2Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode2Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDNextBTNObjects2[i].hide();
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
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDBOXXObjects1, gdjs.Episode2Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDGuadaaObjects1, gdjs.Episode2Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode2Code.GDLoadingObjects1, gdjs.Episode2Code.GDLoadingObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDTITLEObjects1, gdjs.Episode2Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
{for(var i = 0, len = gdjs.Episode2Code.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDLoadingObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.Episode2Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode2Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode2Code.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode2Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode2Code.GDOptionsBOXObjects1, gdjs.Episode2Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode2Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowUpObjects2[k] = gdjs.Episode2Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16781508);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode2Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDArrowDownObjects2[k] = gdjs.Episode2Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16782276);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode2Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode2Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode2Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode2Code.GDEnterObjects2[k] = gdjs.Episode2Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode2Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode2Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16784956);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16785732);
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
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option15");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16786508);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode2Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode2Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode2Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode2Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Episode2Code.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode2Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode2Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode2Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBACKGROUNDObjects1[i].setTexture("CAFE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].getBehavior("Text").setText("S1: Cafe – A Tempting Aroma");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S1ch2");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects1[i].setTexture("Ep2S1.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].setColor("215;223;247");
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDLoadingObjects1[i].setTexture("Episode 2.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode2Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode2Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode2Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode2Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode2Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode2Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBACKGROUNDObjects1[i].setTexture("SCHOOL.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].getBehavior("Text").setText("S2: School – Digital Dilemma");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S2ch2");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects1[i].setTexture("Ep2S2and4.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].setColor("215;223;247");
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode2Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode2Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode2Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode2Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode2Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode2Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode2Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBACKGROUNDObjects1[i].setTexture("SCHOOL.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].getBehavior("Text").setText("S3: School – Circle of Influence");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S3ch2");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects1[i].setTexture("Ep2S3.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].setColor("215;223;247");
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode2Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode2Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode2Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode2Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode2Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode2Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode2Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBACKGROUNDObjects1[i].setTexture("HOME.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].getBehavior("Text").setText("S4: Home – The Broken Trust");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S4ch2");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects1[i].setTexture("Ep2S2and4.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].setColor("215;223;247");
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode2Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode2Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode2Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode2Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Episode2Code.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode2Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode2Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode2Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBACKGROUNDObjects1[i].setTexture("HOMEnyt.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].getBehavior("Text").setText("S5: Home – Silent Sacrifice");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S5ch2");
}
{for(var i = 0, len = gdjs.Episode2Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDGuadaaObjects1[i].setTexture("Ep2S5.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDTITLEObjects1[i].setColor("215;223;247");
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDBOXXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDOptionsBOXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode2Code.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.Episode2Code.GDLoadingObjects1[i].setTexture("Loading.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode2Code.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs.Episode2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Episode2Code.GDBACKGROUNDObjects1.length = 0;
gdjs.Episode2Code.GDBACKGROUNDObjects2.length = 0;
gdjs.Episode2Code.GDBACKGROUNDObjects3.length = 0;
gdjs.Episode2Code.GDBACKGROUNDObjects4.length = 0;
gdjs.Episode2Code.GDTITLEObjects1.length = 0;
gdjs.Episode2Code.GDTITLEObjects2.length = 0;
gdjs.Episode2Code.GDTITLEObjects3.length = 0;
gdjs.Episode2Code.GDTITLEObjects4.length = 0;
gdjs.Episode2Code.GDDialogObjects1.length = 0;
gdjs.Episode2Code.GDDialogObjects2.length = 0;
gdjs.Episode2Code.GDDialogObjects3.length = 0;
gdjs.Episode2Code.GDDialogObjects4.length = 0;
gdjs.Episode2Code.GDNextBTNObjects1.length = 0;
gdjs.Episode2Code.GDNextBTNObjects2.length = 0;
gdjs.Episode2Code.GDNextBTNObjects3.length = 0;
gdjs.Episode2Code.GDNextBTNObjects4.length = 0;
gdjs.Episode2Code.GDOptionsObjects1.length = 0;
gdjs.Episode2Code.GDOptionsObjects2.length = 0;
gdjs.Episode2Code.GDOptionsObjects3.length = 0;
gdjs.Episode2Code.GDOptionsObjects4.length = 0;
gdjs.Episode2Code.GDEnterObjects1.length = 0;
gdjs.Episode2Code.GDEnterObjects2.length = 0;
gdjs.Episode2Code.GDEnterObjects3.length = 0;
gdjs.Episode2Code.GDEnterObjects4.length = 0;
gdjs.Episode2Code.GDConfirm_9595TxtObjects1.length = 0;
gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length = 0;
gdjs.Episode2Code.GDConfirm_9595TxtObjects3.length = 0;
gdjs.Episode2Code.GDConfirm_9595TxtObjects4.length = 0;
gdjs.Episode2Code.GDArrowUpObjects1.length = 0;
gdjs.Episode2Code.GDArrowUpObjects2.length = 0;
gdjs.Episode2Code.GDArrowUpObjects3.length = 0;
gdjs.Episode2Code.GDArrowUpObjects4.length = 0;
gdjs.Episode2Code.GDArrowDownObjects1.length = 0;
gdjs.Episode2Code.GDArrowDownObjects2.length = 0;
gdjs.Episode2Code.GDArrowDownObjects3.length = 0;
gdjs.Episode2Code.GDArrowDownObjects4.length = 0;
gdjs.Episode2Code.GDNewTextObjects1.length = 0;
gdjs.Episode2Code.GDNewTextObjects2.length = 0;
gdjs.Episode2Code.GDNewTextObjects3.length = 0;
gdjs.Episode2Code.GDNewTextObjects4.length = 0;
gdjs.Episode2Code.GDScore2Objects1.length = 0;
gdjs.Episode2Code.GDScore2Objects2.length = 0;
gdjs.Episode2Code.GDScore2Objects3.length = 0;
gdjs.Episode2Code.GDScore2Objects4.length = 0;
gdjs.Episode2Code.GDGuadaaObjects1.length = 0;
gdjs.Episode2Code.GDGuadaaObjects2.length = 0;
gdjs.Episode2Code.GDGuadaaObjects3.length = 0;
gdjs.Episode2Code.GDGuadaaObjects4.length = 0;
gdjs.Episode2Code.GDBOXXObjects1.length = 0;
gdjs.Episode2Code.GDBOXXObjects2.length = 0;
gdjs.Episode2Code.GDBOXXObjects3.length = 0;
gdjs.Episode2Code.GDBOXXObjects4.length = 0;
gdjs.Episode2Code.GDOptionsBOXObjects1.length = 0;
gdjs.Episode2Code.GDOptionsBOXObjects2.length = 0;
gdjs.Episode2Code.GDOptionsBOXObjects3.length = 0;
gdjs.Episode2Code.GDOptionsBOXObjects4.length = 0;
gdjs.Episode2Code.GDLoadingObjects1.length = 0;
gdjs.Episode2Code.GDLoadingObjects2.length = 0;
gdjs.Episode2Code.GDLoadingObjects3.length = 0;
gdjs.Episode2Code.GDLoadingObjects4.length = 0;

gdjs.Episode2Code.eventsList13(runtimeScene);
gdjs.Episode2Code.GDBACKGROUNDObjects1.length = 0;
gdjs.Episode2Code.GDBACKGROUNDObjects2.length = 0;
gdjs.Episode2Code.GDBACKGROUNDObjects3.length = 0;
gdjs.Episode2Code.GDBACKGROUNDObjects4.length = 0;
gdjs.Episode2Code.GDTITLEObjects1.length = 0;
gdjs.Episode2Code.GDTITLEObjects2.length = 0;
gdjs.Episode2Code.GDTITLEObjects3.length = 0;
gdjs.Episode2Code.GDTITLEObjects4.length = 0;
gdjs.Episode2Code.GDDialogObjects1.length = 0;
gdjs.Episode2Code.GDDialogObjects2.length = 0;
gdjs.Episode2Code.GDDialogObjects3.length = 0;
gdjs.Episode2Code.GDDialogObjects4.length = 0;
gdjs.Episode2Code.GDNextBTNObjects1.length = 0;
gdjs.Episode2Code.GDNextBTNObjects2.length = 0;
gdjs.Episode2Code.GDNextBTNObjects3.length = 0;
gdjs.Episode2Code.GDNextBTNObjects4.length = 0;
gdjs.Episode2Code.GDOptionsObjects1.length = 0;
gdjs.Episode2Code.GDOptionsObjects2.length = 0;
gdjs.Episode2Code.GDOptionsObjects3.length = 0;
gdjs.Episode2Code.GDOptionsObjects4.length = 0;
gdjs.Episode2Code.GDEnterObjects1.length = 0;
gdjs.Episode2Code.GDEnterObjects2.length = 0;
gdjs.Episode2Code.GDEnterObjects3.length = 0;
gdjs.Episode2Code.GDEnterObjects4.length = 0;
gdjs.Episode2Code.GDConfirm_9595TxtObjects1.length = 0;
gdjs.Episode2Code.GDConfirm_9595TxtObjects2.length = 0;
gdjs.Episode2Code.GDConfirm_9595TxtObjects3.length = 0;
gdjs.Episode2Code.GDConfirm_9595TxtObjects4.length = 0;
gdjs.Episode2Code.GDArrowUpObjects1.length = 0;
gdjs.Episode2Code.GDArrowUpObjects2.length = 0;
gdjs.Episode2Code.GDArrowUpObjects3.length = 0;
gdjs.Episode2Code.GDArrowUpObjects4.length = 0;
gdjs.Episode2Code.GDArrowDownObjects1.length = 0;
gdjs.Episode2Code.GDArrowDownObjects2.length = 0;
gdjs.Episode2Code.GDArrowDownObjects3.length = 0;
gdjs.Episode2Code.GDArrowDownObjects4.length = 0;
gdjs.Episode2Code.GDNewTextObjects1.length = 0;
gdjs.Episode2Code.GDNewTextObjects2.length = 0;
gdjs.Episode2Code.GDNewTextObjects3.length = 0;
gdjs.Episode2Code.GDNewTextObjects4.length = 0;
gdjs.Episode2Code.GDScore2Objects1.length = 0;
gdjs.Episode2Code.GDScore2Objects2.length = 0;
gdjs.Episode2Code.GDScore2Objects3.length = 0;
gdjs.Episode2Code.GDScore2Objects4.length = 0;
gdjs.Episode2Code.GDGuadaaObjects1.length = 0;
gdjs.Episode2Code.GDGuadaaObjects2.length = 0;
gdjs.Episode2Code.GDGuadaaObjects3.length = 0;
gdjs.Episode2Code.GDGuadaaObjects4.length = 0;
gdjs.Episode2Code.GDBOXXObjects1.length = 0;
gdjs.Episode2Code.GDBOXXObjects2.length = 0;
gdjs.Episode2Code.GDBOXXObjects3.length = 0;
gdjs.Episode2Code.GDBOXXObjects4.length = 0;
gdjs.Episode2Code.GDOptionsBOXObjects1.length = 0;
gdjs.Episode2Code.GDOptionsBOXObjects2.length = 0;
gdjs.Episode2Code.GDOptionsBOXObjects3.length = 0;
gdjs.Episode2Code.GDOptionsBOXObjects4.length = 0;
gdjs.Episode2Code.GDLoadingObjects1.length = 0;
gdjs.Episode2Code.GDLoadingObjects2.length = 0;
gdjs.Episode2Code.GDLoadingObjects3.length = 0;
gdjs.Episode2Code.GDLoadingObjects4.length = 0;


return;

}

gdjs['Episode2Code'] = gdjs.Episode2Code;
