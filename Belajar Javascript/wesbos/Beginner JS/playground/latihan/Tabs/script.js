const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
const tabPanelsArray = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  const tabClicked = event.currentTarget;
  // Hide all tabs panels
  tabPanels.forEach(function (panel) {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach((button) => {
    // button.ariaSelected = false;
    button.setAttribute('aria-selected', false);
  });
  // mark this tab as sekecteb
  //   tabClicked.ariaSelected = true;
  tabClicked.setAttribute('aria-selected', true);

  // find the associated tabPanel and show it!
  const { id } = tabClicked;
  // =============== METHOD 1 forEach ================================
  /*  tabPanels.forEach(function (panel) {
    const tabPanelLabel = panel.getAttribute('aria-labelledby');

    if (tabClicked.id === tabPanelLabel) {
      panel.removeAttribute('hidden');
    }
  }); */

  // =============== METHOD 2 querySelector ================================

  /*   const tabLabelledBy = tabs.querySelector(`[aria-labelledby=${id}]`);
  tabLabelledBy.hidden = false; */

  // =============== METHOD 3 find() ================================
  // tabPanel need to be array

  const tabPanel = tabPanelsArray.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(function (button) {
  button.addEventListener('click', handleTabClick);
});

// TAB
