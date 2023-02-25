const tabWrapper = document.querySelector("#TabWrapper");
const tabs = document.querySelectorAll(".tab");

function setTab(button, tabName) {
  // reset tabs to false
  tabs.forEach((tab) => (tab.dataset.active = "false"));
  // set current tab
  button.dataset.active = "true";

  // set current tab name
  tabWrapper.dataset.activeTab = tabName;
}
