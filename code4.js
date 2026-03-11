gdjs.Episode4Code = {};
gdjs.Episode4Code.localVariables = [];
gdjs.Episode4Code.idToCallbackMap = new Map();
gdjs.Episode4Code.GDBACKGROUNDObjects1= [];
gdjs.Episode4Code.GDBACKGROUNDObjects2= [];
gdjs.Episode4Code.GDBACKGROUNDObjects3= [];
gdjs.Episode4Code.GDBACKGROUNDObjects4= [];
gdjs.Episode4Code.GDTITLEObjects1= [];
gdjs.Episode4Code.GDTITLEObjects2= [];
gdjs.Episode4Code.GDTITLEObjects3= [];
gdjs.Episode4Code.GDTITLEObjects4= [];
gdjs.Episode4Code.GDDialogObjects1= [];
gdjs.Episode4Code.GDDialogObjects2= [];
gdjs.Episode4Code.GDDialogObjects3= [];
gdjs.Episode4Code.GDDialogObjects4= [];
gdjs.Episode4Code.GDNextBTNObjects1= [];
gdjs.Episode4Code.GDNextBTNObjects2= [];
gdjs.Episode4Code.GDNextBTNObjects3= [];
gdjs.Episode4Code.GDNextBTNObjects4= [];
gdjs.Episode4Code.GDOptionsObjects1= [];
gdjs.Episode4Code.GDOptionsObjects2= [];
gdjs.Episode4Code.GDOptionsObjects3= [];
gdjs.Episode4Code.GDOptionsObjects4= [];
gdjs.Episode4Code.GDEnterObjects1= [];
gdjs.Episode4Code.GDEnterObjects2= [];
gdjs.Episode4Code.GDEnterObjects3= [];
gdjs.Episode4Code.GDEnterObjects4= [];
gdjs.Episode4Code.GDConfirm_9595TxtObjects1= [];
gdjs.Episode4Code.GDConfirm_9595TxtObjects2= [];
gdjs.Episode4Code.GDConfirm_9595TxtObjects3= [];
gdjs.Episode4Code.GDConfirm_9595TxtObjects4= [];
gdjs.Episode4Code.GDArrowUpObjects1= [];
gdjs.Episode4Code.GDArrowUpObjects2= [];
gdjs.Episode4Code.GDArrowUpObjects3= [];
gdjs.Episode4Code.GDArrowUpObjects4= [];
gdjs.Episode4Code.GDArrowDownObjects1= [];
gdjs.Episode4Code.GDArrowDownObjects2= [];
gdjs.Episode4Code.GDArrowDownObjects3= [];
gdjs.Episode4Code.GDArrowDownObjects4= [];
gdjs.Episode4Code.GDNewTextObjects1= [];
gdjs.Episode4Code.GDNewTextObjects2= [];
gdjs.Episode4Code.GDNewTextObjects3= [];
gdjs.Episode4Code.GDNewTextObjects4= [];
gdjs.Episode4Code.GDScore2Objects1= [];
gdjs.Episode4Code.GDScore2Objects2= [];
gdjs.Episode4Code.GDScore2Objects3= [];
gdjs.Episode4Code.GDScore2Objects4= [];
gdjs.Episode4Code.GDGuadaaObjects1= [];
gdjs.Episode4Code.GDGuadaaObjects2= [];
gdjs.Episode4Code.GDGuadaaObjects3= [];
gdjs.Episode4Code.GDGuadaaObjects4= [];
gdjs.Episode4Code.GDBOXXObjects1= [];
gdjs.Episode4Code.GDBOXXObjects2= [];
gdjs.Episode4Code.GDBOXXObjects3= [];
gdjs.Episode4Code.GDBOXXObjects4= [];
gdjs.Episode4Code.GDOptionsBOXObjects1= [];
gdjs.Episode4Code.GDOptionsBOXObjects2= [];
gdjs.Episode4Code.GDOptionsBOXObjects3= [];
gdjs.Episode4Code.GDOptionsBOXObjects4= [];
gdjs.Episode4Code.GDLoadingObjects1= [];
gdjs.Episode4Code.GDLoadingObjects2= [];
gdjs.Episode4Code.GDLoadingObjects3= [];
gdjs.Episode4Code.GDLoadingObjects4= [];


gdjs.Episode4Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.Episode4Code.GDLoadingObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDLoadingObjects3.length;i<l;++i) {
    if ( !(gdjs.Episode4Code.GDLoadingObjects3[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDLoadingObjects3[k] = gdjs.Episode4Code.GDLoadingObjects3[i];
        ++k;
    }
}
gdjs.Episode4Code.GDLoadingObjects3.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("BOXX"), gdjs.Episode4Code.GDBOXXObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Guadaa"), gdjs.Episode4Code.GDGuadaaObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("TITLE"), gdjs.Episode4Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects3[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects3[i].hide(false);
}
}
}

}


};gdjs.Episode4Code.asyncCallback16835636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Episode4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Loading"), gdjs.Episode4Code.GDLoadingObjects3);

{for(var i = 0, len = gdjs.Episode4Code.GDLoadingObjects3.length ;i < len;++i) {
    gdjs.Episode4Code.GDLoadingObjects3[i].hide();
}
}

{ //Subevents
gdjs.Episode4Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Episode4Code.localVariables.length = 0;
}
gdjs.Episode4Code.idToCallbackMap.set(16835636, gdjs.Episode4Code.asyncCallback16835636);
gdjs.Episode4Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Episode4Code.localVariables);
for (const obj of gdjs.Episode4Code.GDBOXXObjects2) asyncObjectsList.addObject("BOXX", obj);
for (const obj of gdjs.Episode4Code.GDDialogObjects2) asyncObjectsList.addObject("Dialog", obj);
for (const obj of gdjs.Episode4Code.GDGuadaaObjects2) asyncObjectsList.addObject("Guadaa", obj);
for (const obj of gdjs.Episode4Code.GDLoadingObjects1) asyncObjectsList.addObject("Loading", obj);
for (const obj of gdjs.Episode4Code.GDTITLEObjects2) asyncObjectsList.addObject("TITLE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Episode4Code.asyncCallback16835636(runtimeScene, asyncObjectsList)), 16835636, asyncObjectsList);
}
}

}


};gdjs.Episode4Code.eventsList2 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16161820);
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


};gdjs.Episode4Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode4Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDNextBTNObjects2[i].hide();
}
}

{ //Subevents
gdjs.Episode4Code.eventsList1(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode4Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowUpObjects2[k] = gdjs.Episode4Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16988836);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowDownObjects2[k] = gdjs.Episode4Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16989548);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDEnterObjects2[k] = gdjs.Episode4Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16992252);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16992964);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16993740);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode4Code.eventsList4 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17004172);
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


};gdjs.Episode4Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode4Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDNextBTNObjects2[i].hide();
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
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode4Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowUpObjects2[k] = gdjs.Episode4Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17007924);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowDownObjects2[k] = gdjs.Episode4Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17008692);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDEnterObjects2[k] = gdjs.Episode4Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17011372);
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
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option5");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17012148);
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
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option6");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17012924);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode4Code.eventsList6 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17023332);
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


};gdjs.Episode4Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode4Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDNextBTNObjects2[i].hide();
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
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode4Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowUpObjects2[k] = gdjs.Episode4Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17027084);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowDownObjects2[k] = gdjs.Episode4Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17027852);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDEnterObjects2[k] = gdjs.Episode4Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17030532);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17031308);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17032084);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode4Code.eventsList8 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17042492);
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


};gdjs.Episode4Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode4Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDNextBTNObjects2[i].hide();
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
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode4Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowUpObjects2[k] = gdjs.Episode4Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17046244);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowDownObjects2[k] = gdjs.Episode4Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17047012);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDEnterObjects2[k] = gdjs.Episode4Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17049692);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17050468);
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
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option12");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17051244);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode4Code.asyncCallback17058548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Episode4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "THE END", false);
}
gdjs.Episode4Code.localVariables.length = 0;
}
gdjs.Episode4Code.idToCallbackMap.set(17058548, gdjs.Episode4Code.asyncCallback17058548);
gdjs.Episode4Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Episode4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Episode4Code.asyncCallback17058548(runtimeScene, asyncObjectsList)), 17058548, asyncObjectsList);
}
}

}


};gdjs.Episode4Code.eventsList11 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17062044);
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


};gdjs.Episode4Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode4Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDNextBTNObjects2[i].hide();
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
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDBOXXObjects1, gdjs.Episode4Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDGuadaaObjects1, gdjs.Episode4Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode4Code.GDLoadingObjects1, gdjs.Episode4Code.GDLoadingObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDTITLEObjects1, gdjs.Episode4Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
{for(var i = 0, len = gdjs.Episode4Code.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDLoadingObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.Episode4Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode4Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode4Code.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode4Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode4Code.GDOptionsBOXObjects1, gdjs.Episode4Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode4Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowUpObjects2[k] = gdjs.Episode4Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17065796);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode4Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDArrowDownObjects2[k] = gdjs.Episode4Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17066564);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode4Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode4Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode4Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode4Code.GDEnterObjects2[k] = gdjs.Episode4Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode4Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode4Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17069244);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17070020);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17070796);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode4Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode4Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode4Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode4Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Episode4Code.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode4Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode4Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode4Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBACKGROUNDObjects1[i].setTexture("GARDEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].getBehavior("Text").setText("S1: Community– Group Chat Drama");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S1ch4");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects1[i].setTexture("2Ep2S1.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].setColor("196;215;181");
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDLoadingObjects1[i].setTexture("Episode2(1).png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode4Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode4Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode4Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode4Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode4Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode4Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode4Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBACKGROUNDObjects1[i].setTexture("HOME.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].getBehavior("Text").setText("S2: Home – Peer Pressure");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S2ch4");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects1[i].setTexture("2Ep1S4andEp2S2.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].setColor("191;207;254");
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects1[i].setTexture("BLUE.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode4Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode4Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode4Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode4Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode4Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode4Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode4Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBACKGROUNDObjects1[i].setTexture("SCHOOL1.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].getBehavior("Text").setText("S3: School – Cheating");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S3ch4");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects1[i].setTexture("2Ep2S3.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].setColor("217;241;199");
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode4Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode4Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode4Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode4Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode4Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode4Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode4Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBACKGROUNDObjects1[i].setTexture("SCHOOL1.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].getBehavior("Text").setText("S4: Community – Lost Wallet");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S4ch4");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects1[i].setTexture("2Ep2S4.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].setColor("255;171;145");
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects1[i].setTexture("RED.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects1[i].setTexture("RED.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode4Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode4Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode4Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode4Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Episode4Code.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode4Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode4Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode4Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBACKGROUNDObjects1[i].setTexture("PARKnyt.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].getBehavior("Text").setText("S5: Friendship – Being Left Out");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S5ch4");
}
{for(var i = 0, len = gdjs.Episode4Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDGuadaaObjects1[i].setTexture("2Ep2S5.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDTITLEObjects1[i].setColor("217;241;199");
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDBOXXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDOptionsBOXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode4Code.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.Episode4Code.GDLoadingObjects1[i].setTexture("Loading2.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode4Code.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs.Episode4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Episode4Code.GDBACKGROUNDObjects1.length = 0;
gdjs.Episode4Code.GDBACKGROUNDObjects2.length = 0;
gdjs.Episode4Code.GDBACKGROUNDObjects3.length = 0;
gdjs.Episode4Code.GDBACKGROUNDObjects4.length = 0;
gdjs.Episode4Code.GDTITLEObjects1.length = 0;
gdjs.Episode4Code.GDTITLEObjects2.length = 0;
gdjs.Episode4Code.GDTITLEObjects3.length = 0;
gdjs.Episode4Code.GDTITLEObjects4.length = 0;
gdjs.Episode4Code.GDDialogObjects1.length = 0;
gdjs.Episode4Code.GDDialogObjects2.length = 0;
gdjs.Episode4Code.GDDialogObjects3.length = 0;
gdjs.Episode4Code.GDDialogObjects4.length = 0;
gdjs.Episode4Code.GDNextBTNObjects1.length = 0;
gdjs.Episode4Code.GDNextBTNObjects2.length = 0;
gdjs.Episode4Code.GDNextBTNObjects3.length = 0;
gdjs.Episode4Code.GDNextBTNObjects4.length = 0;
gdjs.Episode4Code.GDOptionsObjects1.length = 0;
gdjs.Episode4Code.GDOptionsObjects2.length = 0;
gdjs.Episode4Code.GDOptionsObjects3.length = 0;
gdjs.Episode4Code.GDOptionsObjects4.length = 0;
gdjs.Episode4Code.GDEnterObjects1.length = 0;
gdjs.Episode4Code.GDEnterObjects2.length = 0;
gdjs.Episode4Code.GDEnterObjects3.length = 0;
gdjs.Episode4Code.GDEnterObjects4.length = 0;
gdjs.Episode4Code.GDConfirm_9595TxtObjects1.length = 0;
gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length = 0;
gdjs.Episode4Code.GDConfirm_9595TxtObjects3.length = 0;
gdjs.Episode4Code.GDConfirm_9595TxtObjects4.length = 0;
gdjs.Episode4Code.GDArrowUpObjects1.length = 0;
gdjs.Episode4Code.GDArrowUpObjects2.length = 0;
gdjs.Episode4Code.GDArrowUpObjects3.length = 0;
gdjs.Episode4Code.GDArrowUpObjects4.length = 0;
gdjs.Episode4Code.GDArrowDownObjects1.length = 0;
gdjs.Episode4Code.GDArrowDownObjects2.length = 0;
gdjs.Episode4Code.GDArrowDownObjects3.length = 0;
gdjs.Episode4Code.GDArrowDownObjects4.length = 0;
gdjs.Episode4Code.GDNewTextObjects1.length = 0;
gdjs.Episode4Code.GDNewTextObjects2.length = 0;
gdjs.Episode4Code.GDNewTextObjects3.length = 0;
gdjs.Episode4Code.GDNewTextObjects4.length = 0;
gdjs.Episode4Code.GDScore2Objects1.length = 0;
gdjs.Episode4Code.GDScore2Objects2.length = 0;
gdjs.Episode4Code.GDScore2Objects3.length = 0;
gdjs.Episode4Code.GDScore2Objects4.length = 0;
gdjs.Episode4Code.GDGuadaaObjects1.length = 0;
gdjs.Episode4Code.GDGuadaaObjects2.length = 0;
gdjs.Episode4Code.GDGuadaaObjects3.length = 0;
gdjs.Episode4Code.GDGuadaaObjects4.length = 0;
gdjs.Episode4Code.GDBOXXObjects1.length = 0;
gdjs.Episode4Code.GDBOXXObjects2.length = 0;
gdjs.Episode4Code.GDBOXXObjects3.length = 0;
gdjs.Episode4Code.GDBOXXObjects4.length = 0;
gdjs.Episode4Code.GDOptionsBOXObjects1.length = 0;
gdjs.Episode4Code.GDOptionsBOXObjects2.length = 0;
gdjs.Episode4Code.GDOptionsBOXObjects3.length = 0;
gdjs.Episode4Code.GDOptionsBOXObjects4.length = 0;
gdjs.Episode4Code.GDLoadingObjects1.length = 0;
gdjs.Episode4Code.GDLoadingObjects2.length = 0;
gdjs.Episode4Code.GDLoadingObjects3.length = 0;
gdjs.Episode4Code.GDLoadingObjects4.length = 0;

gdjs.Episode4Code.eventsList13(runtimeScene);
gdjs.Episode4Code.GDBACKGROUNDObjects1.length = 0;
gdjs.Episode4Code.GDBACKGROUNDObjects2.length = 0;
gdjs.Episode4Code.GDBACKGROUNDObjects3.length = 0;
gdjs.Episode4Code.GDBACKGROUNDObjects4.length = 0;
gdjs.Episode4Code.GDTITLEObjects1.length = 0;
gdjs.Episode4Code.GDTITLEObjects2.length = 0;
gdjs.Episode4Code.GDTITLEObjects3.length = 0;
gdjs.Episode4Code.GDTITLEObjects4.length = 0;
gdjs.Episode4Code.GDDialogObjects1.length = 0;
gdjs.Episode4Code.GDDialogObjects2.length = 0;
gdjs.Episode4Code.GDDialogObjects3.length = 0;
gdjs.Episode4Code.GDDialogObjects4.length = 0;
gdjs.Episode4Code.GDNextBTNObjects1.length = 0;
gdjs.Episode4Code.GDNextBTNObjects2.length = 0;
gdjs.Episode4Code.GDNextBTNObjects3.length = 0;
gdjs.Episode4Code.GDNextBTNObjects4.length = 0;
gdjs.Episode4Code.GDOptionsObjects1.length = 0;
gdjs.Episode4Code.GDOptionsObjects2.length = 0;
gdjs.Episode4Code.GDOptionsObjects3.length = 0;
gdjs.Episode4Code.GDOptionsObjects4.length = 0;
gdjs.Episode4Code.GDEnterObjects1.length = 0;
gdjs.Episode4Code.GDEnterObjects2.length = 0;
gdjs.Episode4Code.GDEnterObjects3.length = 0;
gdjs.Episode4Code.GDEnterObjects4.length = 0;
gdjs.Episode4Code.GDConfirm_9595TxtObjects1.length = 0;
gdjs.Episode4Code.GDConfirm_9595TxtObjects2.length = 0;
gdjs.Episode4Code.GDConfirm_9595TxtObjects3.length = 0;
gdjs.Episode4Code.GDConfirm_9595TxtObjects4.length = 0;
gdjs.Episode4Code.GDArrowUpObjects1.length = 0;
gdjs.Episode4Code.GDArrowUpObjects2.length = 0;
gdjs.Episode4Code.GDArrowUpObjects3.length = 0;
gdjs.Episode4Code.GDArrowUpObjects4.length = 0;
gdjs.Episode4Code.GDArrowDownObjects1.length = 0;
gdjs.Episode4Code.GDArrowDownObjects2.length = 0;
gdjs.Episode4Code.GDArrowDownObjects3.length = 0;
gdjs.Episode4Code.GDArrowDownObjects4.length = 0;
gdjs.Episode4Code.GDNewTextObjects1.length = 0;
gdjs.Episode4Code.GDNewTextObjects2.length = 0;
gdjs.Episode4Code.GDNewTextObjects3.length = 0;
gdjs.Episode4Code.GDNewTextObjects4.length = 0;
gdjs.Episode4Code.GDScore2Objects1.length = 0;
gdjs.Episode4Code.GDScore2Objects2.length = 0;
gdjs.Episode4Code.GDScore2Objects3.length = 0;
gdjs.Episode4Code.GDScore2Objects4.length = 0;
gdjs.Episode4Code.GDGuadaaObjects1.length = 0;
gdjs.Episode4Code.GDGuadaaObjects2.length = 0;
gdjs.Episode4Code.GDGuadaaObjects3.length = 0;
gdjs.Episode4Code.GDGuadaaObjects4.length = 0;
gdjs.Episode4Code.GDBOXXObjects1.length = 0;
gdjs.Episode4Code.GDBOXXObjects2.length = 0;
gdjs.Episode4Code.GDBOXXObjects3.length = 0;
gdjs.Episode4Code.GDBOXXObjects4.length = 0;
gdjs.Episode4Code.GDOptionsBOXObjects1.length = 0;
gdjs.Episode4Code.GDOptionsBOXObjects2.length = 0;
gdjs.Episode4Code.GDOptionsBOXObjects3.length = 0;
gdjs.Episode4Code.GDOptionsBOXObjects4.length = 0;
gdjs.Episode4Code.GDLoadingObjects1.length = 0;
gdjs.Episode4Code.GDLoadingObjects2.length = 0;
gdjs.Episode4Code.GDLoadingObjects3.length = 0;
gdjs.Episode4Code.GDLoadingObjects4.length = 0;


return;

}

gdjs['Episode4Code'] = gdjs.Episode4Code;
