
export default {
  // States that persist by reading and writing to localStorage
  sticky: {
    lightSwitch: 1,
    lightSwitchSetByUser: false,
    // sortValues: false,
    viewMode: 'grid',
    chunkLocation: 0,
    booksInSeriesToggle: false,
    collectionsDrawerToggle: true,
    exportSettingsGallery: null,
    exportSettingsCSVdataSources: null,
    exportSettingsCSVcompatibility: null,
    exportSettingsGoodreadsIdentifier: null,
    booksInSeriesAll: true,
    booksInSeriesFinished: true,
    booksInSeriesOpenInApp: true,
    subPageSource: 'library',
    bookDetailsCollapsedCover: false,
    bookDetailsCollapsedDetails: false,
    contextMenuReminder: true,
    detailLinksToAudible: true,
    bookDetailSettings: {
      minHeight: null,
      titleShort: true,
      sidebar: {
        show: true,
        iconToolbar: true,
        seriesList: true,
        collectionsList: true,
      },
      carousel: true,
      playButton: true,
      cloudPlayer: false,
      blurb: true,
      statusIndicators: true,
      whispersync: true,
      plusCatalog: true,
      favorite: true,
      finished: true,
      reverseDirection: false,
      hideFirstSection: false,
    },
    collectionsHidePremade: false,
    player: {
      books: [
        // { asin: x, progress: 0 },
      ],
    },
    seriesFilters: {
      inLibrary: null,
      notInLibrary: null,
    },
  },
  // States that don't persist
  bookDetailSettingsOpen: false,
  searchMounted: false,
  searchCollection: [],
  mutatingCollection: [],
  collectionSource: null,
  pageCollection: null,
  route: null,
  routeParams: null,
  library: null,
  urlOrigin: null,
  searchQuery: "",
  standalone: null,
  displayMode: null,
  listRenderingOpts: null,
  windowWidth: window.innerWidth,
  showBackground: false,
  chunkCollection: [],
  chunkDistance: 40,
  refreshViewTimeStamp: new Date().getTime(),
  showRoute: true,
  pageTitle: null,
  pageSubTitle: null,
  version: import.meta.env.PACKAGE_VERSION,
  extractSettings: null,
  siteOnline: true,
  searchOptCloseGuard: false,
  bundlingGallery: false,
  bookDetails: {
    book: null,
    index: -1,
  },
  searchOptOpenHeight: null,
  devMode: import.meta.env.MODE === 'development',
  lazyScroll: true,
  navHistory: {
    btnNavigation: false,
    forward: [],
    back: [],
  },
  modal: {
    saveLocally: false,
  },
  preventScrolling: false,
  playingAudio: false,
  topNavOffset: 0,
  bookClicked: false,
  audioPlayer: {
    audio: null, // input object
    // howler: null,
    timeDisplay: '00:00',
    timeDisplayLeft: '00:00',
    progress: 0,
    sample: true,
    playing: false,
  },
  showMobilePlayer: false,
  desktopPlayerHeight: null,
  mobileWidth: 630,
};