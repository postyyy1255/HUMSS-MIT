gdjs.Episode1Code = {};
gdjs.Episode1Code.localVariables = [];
gdjs.Episode1Code.idToCallbackMap = new Map();
gdjs.Episode1Code.GDBACKGROUNDObjects1= [];
gdjs.Episode1Code.GDBACKGROUNDObjects2= [];
gdjs.Episode1Code.GDBACKGROUNDObjects3= [];
gdjs.Episode1Code.GDBACKGROUNDObjects4= [];
gdjs.Episode1Code.GDBACKGROUNDObjects5= [];
gdjs.Episode1Code.GDTITLEObjects1= [];
gdjs.Episode1Code.GDTITLEObjects2= [];
gdjs.Episode1Code.GDTITLEObjects3= [];
gdjs.Episode1Code.GDTITLEObjects4= [];
gdjs.Episode1Code.GDTITLEObjects5= [];
gdjs.Episode1Code.GDDialogObjects1= [];
gdjs.Episode1Code.GDDialogObjects2= [];
gdjs.Episode1Code.GDDialogObjects3= [];
gdjs.Episode1Code.GDDialogObjects4= [];
gdjs.Episode1Code.GDDialogObjects5= [];
gdjs.Episode1Code.GDNextBTNObjects1= [];
gdjs.Episode1Code.GDNextBTNObjects2= [];
gdjs.Episode1Code.GDNextBTNObjects3= [];
gdjs.Episode1Code.GDNextBTNObjects4= [];
gdjs.Episode1Code.GDNextBTNObjects5= [];
gdjs.Episode1Code.GDOptionsObjects1= [];
gdjs.Episode1Code.GDOptionsObjects2= [];
gdjs.Episode1Code.GDOptionsObjects3= [];
gdjs.Episode1Code.GDOptionsObjects4= [];
gdjs.Episode1Code.GDOptionsObjects5= [];
gdjs.Episode1Code.GDEnterObjects1= [];
gdjs.Episode1Code.GDEnterObjects2= [];
gdjs.Episode1Code.GDEnterObjects3= [];
gdjs.Episode1Code.GDEnterObjects4= [];
gdjs.Episode1Code.GDEnterObjects5= [];
gdjs.Episode1Code.GDConfirm_9595TxtObjects1= [];
gdjs.Episode1Code.GDConfirm_9595TxtObjects2= [];
gdjs.Episode1Code.GDConfirm_9595TxtObjects3= [];
gdjs.Episode1Code.GDConfirm_9595TxtObjects4= [];
gdjs.Episode1Code.GDConfirm_9595TxtObjects5= [];
gdjs.Episode1Code.GDArrowUpObjects1= [];
gdjs.Episode1Code.GDArrowUpObjects2= [];
gdjs.Episode1Code.GDArrowUpObjects3= [];
gdjs.Episode1Code.GDArrowUpObjects4= [];
gdjs.Episode1Code.GDArrowUpObjects5= [];
gdjs.Episode1Code.GDArrowDownObjects1= [];
gdjs.Episode1Code.GDArrowDownObjects2= [];
gdjs.Episode1Code.GDArrowDownObjects3= [];
gdjs.Episode1Code.GDArrowDownObjects4= [];
gdjs.Episode1Code.GDArrowDownObjects5= [];
gdjs.Episode1Code.GDNewTextObjects1= [];
gdjs.Episode1Code.GDNewTextObjects2= [];
gdjs.Episode1Code.GDNewTextObjects3= [];
gdjs.Episode1Code.GDNewTextObjects4= [];
gdjs.Episode1Code.GDNewTextObjects5= [];
gdjs.Episode1Code.GDScore2Objects1= [];
gdjs.Episode1Code.GDScore2Objects2= [];
gdjs.Episode1Code.GDScore2Objects3= [];
gdjs.Episode1Code.GDScore2Objects4= [];
gdjs.Episode1Code.GDScore2Objects5= [];
gdjs.Episode1Code.GDGuadaaObjects1= [];
gdjs.Episode1Code.GDGuadaaObjects2= [];
gdjs.Episode1Code.GDGuadaaObjects3= [];
gdjs.Episode1Code.GDGuadaaObjects4= [];
gdjs.Episode1Code.GDGuadaaObjects5= [];
gdjs.Episode1Code.GDBOXXObjects1= [];
gdjs.Episode1Code.GDBOXXObjects2= [];
gdjs.Episode1Code.GDBOXXObjects3= [];
gdjs.Episode1Code.GDBOXXObjects4= [];
gdjs.Episode1Code.GDBOXXObjects5= [];
gdjs.Episode1Code.GDOptionsBOXObjects1= [];
gdjs.Episode1Code.GDOptionsBOXObjects2= [];
gdjs.Episode1Code.GDOptionsBOXObjects3= [];
gdjs.Episode1Code.GDOptionsBOXObjects4= [];
gdjs.Episode1Code.GDOptionsBOXObjects5= [];
gdjs.Episode1Code.GDLoadingObjects1= [];
gdjs.Episode1Code.GDLoadingObjects2= [];
gdjs.Episode1Code.GDLoadingObjects3= [];
gdjs.Episode1Code.GDLoadingObjects4= [];
gdjs.Episode1Code.GDLoadingObjects5= [];


gdjs.Episode1Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("BOXX"), gdjs.Episode1Code.GDBOXXObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("Guadaa"), gdjs.Episode1Code.GDGuadaaObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("Loading"), gdjs.Episode1Code.GDLoadingObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("TITLE"), gdjs.Episode1Code.GDTITLEObjects4);

{for(var i = 0, len = gdjs.Episode1Code.GDLoadingObjects4.length ;i < len;++i) {
    gdjs.Episode1Code.GDLoadingObjects4[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects4.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects4[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects4.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects4[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects4.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects4[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects4.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects4[i].hide(false);
}
}
}

}


};gdjs.Episode1Code.asyncCallback16454156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Episode1Code.localVariables);

{ //Subevents
gdjs.Episode1Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Episode1Code.localVariables.length = 0;
}
gdjs.Episode1Code.idToCallbackMap.set(16454156, gdjs.Episode1Code.asyncCallback16454156);
gdjs.Episode1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Episode1Code.localVariables);
for (const obj of gdjs.Episode1Code.GDBOXXObjects3) asyncObjectsList.addObject("BOXX", obj);
for (const obj of gdjs.Episode1Code.GDDialogObjects3) asyncObjectsList.addObject("Dialog", obj);
for (const obj of gdjs.Episode1Code.GDGuadaaObjects3) asyncObjectsList.addObject("Guadaa", obj);
for (const obj of gdjs.Episode1Code.GDLoadingObjects3) asyncObjectsList.addObject("Loading", obj);
for (const obj of gdjs.Episode1Code.GDTITLEObjects3) asyncObjectsList.addObject("TITLE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Episode1Code.asyncCallback16454156(runtimeScene, asyncObjectsList)), 16454156, asyncObjectsList);
}
}

}


};gdjs.Episode1Code.eventsList2 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16461228);
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


};gdjs.Episode1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(gdjs.Episode1Code.GDLoadingObjects2, gdjs.Episode1Code.GDLoadingObjects3);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode1Code.GDNextBTNObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDLoadingObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDLoadingObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDNextBTNObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDNextBTNObjects3[i].hide();
}
}

{ //Subevents
gdjs.Episode1Code.eventsList1(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowUpObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowUpObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowUpObjects3[k] = gdjs.Episode1Code.GDArrowUpObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowUpObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16464988);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowDownObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowDownObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowDownObjects3[k] = gdjs.Episode1Code.GDArrowDownObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowDownObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16465700);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDEnterObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDEnterObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDEnterObjects3[k] = gdjs.Episode1Code.GDEnterObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDEnterObjects3.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16468404);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16469116);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16469892);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode1Code.eventsList4 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16480292);
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


};gdjs.Episode1Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode1Code.GDNextBTNObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDNextBTNObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDNextBTNObjects3[i].hide();
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
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode1Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowUpObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowUpObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowUpObjects3[k] = gdjs.Episode1Code.GDArrowUpObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowUpObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16484044);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowDownObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowDownObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowDownObjects3[k] = gdjs.Episode1Code.GDArrowDownObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowDownObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16484812);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDEnterObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDEnterObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDEnterObjects3[k] = gdjs.Episode1Code.GDEnterObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDEnterObjects3.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16487492);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16488268);
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
isConditionTrue_0 = gdjs.dialogueTree.branchTitleHasBeenVisited("option6");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16489044);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}
}

}


};gdjs.Episode1Code.eventsList6 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16499428);
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


};gdjs.Episode1Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode1Code.GDNextBTNObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDNextBTNObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDNextBTNObjects3[i].hide();
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
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode1Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowUpObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowUpObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowUpObjects3[k] = gdjs.Episode1Code.GDArrowUpObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowUpObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16503180);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowDownObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowDownObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowDownObjects3[k] = gdjs.Episode1Code.GDArrowDownObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowDownObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16503948);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDEnterObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDEnterObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDEnterObjects3[k] = gdjs.Episode1Code.GDEnterObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDEnterObjects3.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16506628);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16507404);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16508180);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode1Code.eventsList8 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16518588);
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


};gdjs.Episode1Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode1Code.GDNextBTNObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDNextBTNObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDNextBTNObjects3[i].hide();
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
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects2, gdjs.Episode1Code.GDBOXXObjects3);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects2, gdjs.Episode1Code.GDGuadaaObjects3);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects2, gdjs.Episode1Code.GDTITLEObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects3[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects3);
{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects3[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode1Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects2, gdjs.Episode1Code.GDOptionsBOXObjects3);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowUpObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowUpObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowUpObjects3[k] = gdjs.Episode1Code.GDArrowUpObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowUpObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16522340);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowDownObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowDownObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowDownObjects3[k] = gdjs.Episode1Code.GDArrowDownObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowDownObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16523108);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDEnterObjects3.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDEnterObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDEnterObjects3[k] = gdjs.Episode1Code.GDEnterObjects3[i];
        ++k;
    }
}
gdjs.Episode1Code.GDEnterObjects3.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects3);
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects3[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16525788);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16526564);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16527340);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
}

}


};gdjs.Episode1Code.asyncCallback16534644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Episode1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Episode2", false);
}
gdjs.Episode1Code.localVariables.length = 0;
}
gdjs.Episode1Code.idToCallbackMap.set(16534644, gdjs.Episode1Code.asyncCallback16534644);
gdjs.Episode1Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Episode1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Episode1Code.asyncCallback16534644(runtimeScene, asyncObjectsList)), 16534644, asyncObjectsList);
}
}

}


};gdjs.Episode1Code.eventsList11 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16538140);
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


};gdjs.Episode1Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects1, gdjs.Episode1Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects1, gdjs.Episode1Code.GDGuadaaObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode1Code.GDNextBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects1, gdjs.Episode1Code.GDOptionsBOXObjects2);

gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects1, gdjs.Episode1Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDNextBTNObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDNextBTNObjects2[i].hide();
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
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects1, gdjs.Episode1Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects2);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects1, gdjs.Episode1Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects1, gdjs.Episode1Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrolltext");
}
{gdjs.dialogueTree.startFrom("Start");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects2);
gdjs.copyArray(gdjs.Episode1Code.GDBOXXObjects1, gdjs.Episode1Code.GDBOXXObjects2);

gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects2);
gdjs.copyArray(gdjs.Episode1Code.GDGuadaaObjects1, gdjs.Episode1Code.GDGuadaaObjects2);

gdjs.copyArray(gdjs.Episode1Code.GDLoadingObjects1, gdjs.Episode1Code.GDLoadingObjects2);

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode1Code.GDTITLEObjects1, gdjs.Episode1Code.GDTITLEObjects2);

{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
{for(var i = 0, len = gdjs.Episode1Code.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDLoadingObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.Episode1Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Episode1Code.GDDialogObjects2);
{for(var i = 0, len = gdjs.Episode1Code.GDDialogObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDDialogObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Episode1Code.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects1, gdjs.Episode1Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confirm_Txt"), gdjs.Episode1Code.GDConfirm_9595TxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects2);
gdjs.copyArray(gdjs.Episode1Code.GDOptionsBOXObjects1, gdjs.Episode1Code.GDOptionsBOXObjects2);

{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDEnterObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDConfirm_9595TxtObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDConfirm_9595TxtObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowUpObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowUpObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDArrowDownObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDArrowDownObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Episode1Code.GDArrowUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowUpObjects2.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowUpObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowUpObjects2[k] = gdjs.Episode1Code.GDArrowUpObjects2[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16541892);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowDown"), gdjs.Episode1Code.GDArrowDownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDArrowDownObjects2.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDArrowDownObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDArrowDownObjects2[k] = gdjs.Episode1Code.GDArrowDownObjects2[i];
        ++k;
    }
}
gdjs.Episode1Code.GDArrowDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16542660);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Episode1Code.GDEnterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDEnterObjects2.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDEnterObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDEnterObjects2[k] = gdjs.Episode1Code.GDEnterObjects2[i];
        ++k;
    }
}
gdjs.Episode1Code.GDEnterObjects2.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Episode1Code.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16545340);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16546116);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16546892);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}
}

}


};gdjs.Episode1Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode1Code.GDBACKGROUNDObjects2);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode1Code.GDBOXXObjects2);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode1Code.GDGuadaaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Episode1Code.GDLoadingObjects2);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode1Code.GDOptionsBOXObjects2);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode1Code.GDTITLEObjects2);
{for(var i = 0, len = gdjs.Episode1Code.GDBACKGROUNDObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBACKGROUNDObjects2[i].setTexture("ROOM.png", runtimeScene);
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S1");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects2[i].setTexture("Ep1S1.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].setColor("198;119;109");
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects2[i].setTexture("RED.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects2[i].setTexture("RED.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDLoadingObjects2[i].setTexture("Episode 1.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode1Code.GDBACKGROUNDObjects2);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode1Code.GDBOXXObjects2);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode1Code.GDGuadaaObjects2);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode1Code.GDOptionsBOXObjects2);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode1Code.GDTITLEObjects2);
{for(var i = 0, len = gdjs.Episode1Code.GDBACKGROUNDObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBACKGROUNDObjects2[i].setTexture("COMMUNITY.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].getBehavior("Text").setText("S2: School – Unmet Condition");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S2");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects2[i].setTexture("Ep1S2.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].setColor("217;241;199");
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects2[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects2[i].setTexture("GREEN.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode1Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode1Code.GDBACKGROUNDObjects2);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode1Code.GDBOXXObjects2);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode1Code.GDGuadaaObjects2);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode1Code.GDOptionsBOXObjects2);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode1Code.GDTITLEObjects2);
{for(var i = 0, len = gdjs.Episode1Code.GDBACKGROUNDObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBACKGROUNDObjects2[i].setTexture("SCHOOL.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].getBehavior("Text").setText("S3: School – Group Activity");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S3");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects2[i].setTexture("Ep1S3.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].setColor("217;241;199");
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects2[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects2[i].setTexture("GREEN.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode1Code.GDBACKGROUNDObjects2);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode1Code.GDBOXXObjects2);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode1Code.GDGuadaaObjects2);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode1Code.GDOptionsBOXObjects2);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode1Code.GDTITLEObjects2);
{for(var i = 0, len = gdjs.Episode1Code.GDBACKGROUNDObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBACKGROUNDObjects2[i].setTexture("HALLWAY.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].getBehavior("Text").setText("S4: Community – Critical Find");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S4");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects2[i].setTexture("Ep1S4.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects2[i].setColor("217;241;199");
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects2[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects2.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects2[i].setTexture("GREEN.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode1Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BACKGROUND"), gdjs.Episode1Code.GDBACKGROUNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOXX"), gdjs.Episode1Code.GDBOXXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guadaa"), gdjs.Episode1Code.GDGuadaaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Episode1Code.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBOX"), gdjs.Episode1Code.GDOptionsBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Episode1Code.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Episode1Code.GDBACKGROUNDObjects1.length ;i < len;++i) {
    gdjs.Episode1Code.GDBACKGROUNDObjects1[i].setTexture("COMMUNITY.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects1[i].getBehavior("Text").setText("S5: Community – Rise Above Fear");
}
}
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "S5");
}
{for(var i = 0, len = gdjs.Episode1Code.GDGuadaaObjects1.length ;i < len;++i) {
    gdjs.Episode1Code.GDGuadaaObjects1[i].setTexture("Ep1S5.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDTITLEObjects1.length ;i < len;++i) {
    gdjs.Episode1Code.GDTITLEObjects1[i].setColor("217;241;199");
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDBOXXObjects1.length ;i < len;++i) {
    gdjs.Episode1Code.GDBOXXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDOptionsBOXObjects1.length ;i < len;++i) {
    gdjs.Episode1Code.GDOptionsBOXObjects1[i].setTexture("GREEN.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.Episode1Code.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.Episode1Code.GDLoadingObjects1[i].setTexture("Loading.png", runtimeScene);
}
}

{ //Subevents
gdjs.Episode1Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Episode1Code.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Episode1Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextBTN"), gdjs.Episode1Code.GDNextBTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Episode1Code.GDNextBTNObjects1.length;i<l;++i) {
    if ( gdjs.Episode1Code.GDNextBTNObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Episode1Code.GDNextBTNObjects1[k] = gdjs.Episode1Code.GDNextBTNObjects1[i];
        ++k;
    }
}
gdjs.Episode1Code.GDNextBTNObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16644084);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


};

gdjs.Episode1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Episode1Code.GDBACKGROUNDObjects1.length = 0;
gdjs.Episode1Code.GDBACKGROUNDObjects2.length = 0;
gdjs.Episode1Code.GDBACKGROUNDObjects3.length = 0;
gdjs.Episode1Code.GDBACKGROUNDObjects4.length = 0;
gdjs.Episode1Code.GDBACKGROUNDObjects5.length = 0;
gdjs.Episode1Code.GDTITLEObjects1.length = 0;
gdjs.Episode1Code.GDTITLEObjects2.length = 0;
gdjs.Episode1Code.GDTITLEObjects3.length = 0;
gdjs.Episode1Code.GDTITLEObjects4.length = 0;
gdjs.Episode1Code.GDTITLEObjects5.length = 0;
gdjs.Episode1Code.GDDialogObjects1.length = 0;
gdjs.Episode1Code.GDDialogObjects2.length = 0;
gdjs.Episode1Code.GDDialogObjects3.length = 0;
gdjs.Episode1Code.GDDialogObjects4.length = 0;
gdjs.Episode1Code.GDDialogObjects5.length = 0;
gdjs.Episode1Code.GDNextBTNObjects1.length = 0;
gdjs.Episode1Code.GDNextBTNObjects2.length = 0;
gdjs.Episode1Code.GDNextBTNObjects3.length = 0;
gdjs.Episode1Code.GDNextBTNObjects4.length = 0;
gdjs.Episode1Code.GDNextBTNObjects5.length = 0;
gdjs.Episode1Code.GDOptionsObjects1.length = 0;
gdjs.Episode1Code.GDOptionsObjects2.length = 0;
gdjs.Episode1Code.GDOptionsObjects3.length = 0;
gdjs.Episode1Code.GDOptionsObjects4.length = 0;
gdjs.Episode1Code.GDOptionsObjects5.length = 0;
gdjs.Episode1Code.GDEnterObjects1.length = 0;
gdjs.Episode1Code.GDEnterObjects2.length = 0;
gdjs.Episode1Code.GDEnterObjects3.length = 0;
gdjs.Episode1Code.GDEnterObjects4.length = 0;
gdjs.Episode1Code.GDEnterObjects5.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects1.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects2.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects4.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects5.length = 0;
gdjs.Episode1Code.GDArrowUpObjects1.length = 0;
gdjs.Episode1Code.GDArrowUpObjects2.length = 0;
gdjs.Episode1Code.GDArrowUpObjects3.length = 0;
gdjs.Episode1Code.GDArrowUpObjects4.length = 0;
gdjs.Episode1Code.GDArrowUpObjects5.length = 0;
gdjs.Episode1Code.GDArrowDownObjects1.length = 0;
gdjs.Episode1Code.GDArrowDownObjects2.length = 0;
gdjs.Episode1Code.GDArrowDownObjects3.length = 0;
gdjs.Episode1Code.GDArrowDownObjects4.length = 0;
gdjs.Episode1Code.GDArrowDownObjects5.length = 0;
gdjs.Episode1Code.GDNewTextObjects1.length = 0;
gdjs.Episode1Code.GDNewTextObjects2.length = 0;
gdjs.Episode1Code.GDNewTextObjects3.length = 0;
gdjs.Episode1Code.GDNewTextObjects4.length = 0;
gdjs.Episode1Code.GDNewTextObjects5.length = 0;
gdjs.Episode1Code.GDScore2Objects1.length = 0;
gdjs.Episode1Code.GDScore2Objects2.length = 0;
gdjs.Episode1Code.GDScore2Objects3.length = 0;
gdjs.Episode1Code.GDScore2Objects4.length = 0;
gdjs.Episode1Code.GDScore2Objects5.length = 0;
gdjs.Episode1Code.GDGuadaaObjects1.length = 0;
gdjs.Episode1Code.GDGuadaaObjects2.length = 0;
gdjs.Episode1Code.GDGuadaaObjects3.length = 0;
gdjs.Episode1Code.GDGuadaaObjects4.length = 0;
gdjs.Episode1Code.GDGuadaaObjects5.length = 0;
gdjs.Episode1Code.GDBOXXObjects1.length = 0;
gdjs.Episode1Code.GDBOXXObjects2.length = 0;
gdjs.Episode1Code.GDBOXXObjects3.length = 0;
gdjs.Episode1Code.GDBOXXObjects4.length = 0;
gdjs.Episode1Code.GDBOXXObjects5.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects1.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects2.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects3.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects4.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects5.length = 0;
gdjs.Episode1Code.GDLoadingObjects1.length = 0;
gdjs.Episode1Code.GDLoadingObjects2.length = 0;
gdjs.Episode1Code.GDLoadingObjects3.length = 0;
gdjs.Episode1Code.GDLoadingObjects4.length = 0;
gdjs.Episode1Code.GDLoadingObjects5.length = 0;

gdjs.Episode1Code.eventsList14(runtimeScene);
gdjs.Episode1Code.GDBACKGROUNDObjects1.length = 0;
gdjs.Episode1Code.GDBACKGROUNDObjects2.length = 0;
gdjs.Episode1Code.GDBACKGROUNDObjects3.length = 0;
gdjs.Episode1Code.GDBACKGROUNDObjects4.length = 0;
gdjs.Episode1Code.GDBACKGROUNDObjects5.length = 0;
gdjs.Episode1Code.GDTITLEObjects1.length = 0;
gdjs.Episode1Code.GDTITLEObjects2.length = 0;
gdjs.Episode1Code.GDTITLEObjects3.length = 0;
gdjs.Episode1Code.GDTITLEObjects4.length = 0;
gdjs.Episode1Code.GDTITLEObjects5.length = 0;
gdjs.Episode1Code.GDDialogObjects1.length = 0;
gdjs.Episode1Code.GDDialogObjects2.length = 0;
gdjs.Episode1Code.GDDialogObjects3.length = 0;
gdjs.Episode1Code.GDDialogObjects4.length = 0;
gdjs.Episode1Code.GDDialogObjects5.length = 0;
gdjs.Episode1Code.GDNextBTNObjects1.length = 0;
gdjs.Episode1Code.GDNextBTNObjects2.length = 0;
gdjs.Episode1Code.GDNextBTNObjects3.length = 0;
gdjs.Episode1Code.GDNextBTNObjects4.length = 0;
gdjs.Episode1Code.GDNextBTNObjects5.length = 0;
gdjs.Episode1Code.GDOptionsObjects1.length = 0;
gdjs.Episode1Code.GDOptionsObjects2.length = 0;
gdjs.Episode1Code.GDOptionsObjects3.length = 0;
gdjs.Episode1Code.GDOptionsObjects4.length = 0;
gdjs.Episode1Code.GDOptionsObjects5.length = 0;
gdjs.Episode1Code.GDEnterObjects1.length = 0;
gdjs.Episode1Code.GDEnterObjects2.length = 0;
gdjs.Episode1Code.GDEnterObjects3.length = 0;
gdjs.Episode1Code.GDEnterObjects4.length = 0;
gdjs.Episode1Code.GDEnterObjects5.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects1.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects2.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects3.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects4.length = 0;
gdjs.Episode1Code.GDConfirm_9595TxtObjects5.length = 0;
gdjs.Episode1Code.GDArrowUpObjects1.length = 0;
gdjs.Episode1Code.GDArrowUpObjects2.length = 0;
gdjs.Episode1Code.GDArrowUpObjects3.length = 0;
gdjs.Episode1Code.GDArrowUpObjects4.length = 0;
gdjs.Episode1Code.GDArrowUpObjects5.length = 0;
gdjs.Episode1Code.GDArrowDownObjects1.length = 0;
gdjs.Episode1Code.GDArrowDownObjects2.length = 0;
gdjs.Episode1Code.GDArrowDownObjects3.length = 0;
gdjs.Episode1Code.GDArrowDownObjects4.length = 0;
gdjs.Episode1Code.GDArrowDownObjects5.length = 0;
gdjs.Episode1Code.GDNewTextObjects1.length = 0;
gdjs.Episode1Code.GDNewTextObjects2.length = 0;
gdjs.Episode1Code.GDNewTextObjects3.length = 0;
gdjs.Episode1Code.GDNewTextObjects4.length = 0;
gdjs.Episode1Code.GDNewTextObjects5.length = 0;
gdjs.Episode1Code.GDScore2Objects1.length = 0;
gdjs.Episode1Code.GDScore2Objects2.length = 0;
gdjs.Episode1Code.GDScore2Objects3.length = 0;
gdjs.Episode1Code.GDScore2Objects4.length = 0;
gdjs.Episode1Code.GDScore2Objects5.length = 0;
gdjs.Episode1Code.GDGuadaaObjects1.length = 0;
gdjs.Episode1Code.GDGuadaaObjects2.length = 0;
gdjs.Episode1Code.GDGuadaaObjects3.length = 0;
gdjs.Episode1Code.GDGuadaaObjects4.length = 0;
gdjs.Episode1Code.GDGuadaaObjects5.length = 0;
gdjs.Episode1Code.GDBOXXObjects1.length = 0;
gdjs.Episode1Code.GDBOXXObjects2.length = 0;
gdjs.Episode1Code.GDBOXXObjects3.length = 0;
gdjs.Episode1Code.GDBOXXObjects4.length = 0;
gdjs.Episode1Code.GDBOXXObjects5.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects1.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects2.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects3.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects4.length = 0;
gdjs.Episode1Code.GDOptionsBOXObjects5.length = 0;
gdjs.Episode1Code.GDLoadingObjects1.length = 0;
gdjs.Episode1Code.GDLoadingObjects2.length = 0;
gdjs.Episode1Code.GDLoadingObjects3.length = 0;
gdjs.Episode1Code.GDLoadingObjects4.length = 0;
gdjs.Episode1Code.GDLoadingObjects5.length = 0;


return;

}

gdjs['Episode1Code'] = gdjs.Episode1Code;
