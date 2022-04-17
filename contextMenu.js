const contextMenu = {
  id: 'searchDiscogs',
  contexts: ['selection'],
  title: 'Search Discogs for "%s"'
};

const onClick = ({ selectionText }) => {
  chrome.tabs.create({ url: `https://discogs.com/search/?q=${selectionText}&type=all` })
};

chrome.contextMenus.create(contextMenu);
chrome.contextMenus.onClicked.addListener(onClick);