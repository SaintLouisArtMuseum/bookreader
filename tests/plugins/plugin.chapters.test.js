import sinon from 'sinon';
import '../../BookReader/jquery-1.10.1.js';
import '../../BookReader/jquery-ui-1.12.0.min.js';
import '../../BookReader/jquery.browser.min.js';
import '../../BookReader/dragscrollable-br.js';
import '../../BookReader/jquery.colorbox-min.js';
import '../../BookReader/jquery.bt.min.js';
import '../../BookReader/mmenu/dist/js/jquery.mmenu.min.js';
import '../../BookReader/mmenu/dist/addons/navbars/jquery.mmenu.navbars.min.js';


import BookReader from '../../src/js/BookReader.js';
import '../../src/js/plugins/plugin.mobile_nav.js';
import '../../src/js/plugins/plugin.chapters.js';

const SAMPLE_TOC = [{
  "pagenum": "3",
  "level": 1,
  "label": "CHAPTER I",
  "type": {"key": "/type/toc_item"},
  "title": "THE COUNTRY AND THE MISSION 1",
  "pageIndex": 3,
},{
  "pagenum": "17",
  "level": 1,
  "label": "CHAPTER II",
  "type": {"key": "/type/toc_item"},
  "title": "THE COUNTRY AND THE MISSION 2",
  "pageIndex": 17,
},
{
  "pagenum": "undefined",
  "level": 1,
  "label": "CHAPTER III",
  "type": {"key": "/type/toc_item"},
  "title": "THE COUNTRY AND THE MISSION 3",
  "pageIndex": undefined,
},
{
  "pagenum": "40",
  "level": 1,
  "label": "CHAPTER IV",
  "type": {"key": "/type/toc_item"},
  "title": "THE COUNTRY AND THE MISSION 4",
  "pageIndex": 40,
}];

const SAMPLE_TOC_UNDEF = [
  {
    "pagenum": "undefined",
    "level": 1,
    "label": "CHAPTER I",
    "type": {"key": "/type/toc_item"},
    "title": "THE COUNTRY AND THE MISSION 1",
    "pageIndex": undefined,
  },
  {
    "pagenum": "undefined",
    "level": 1,
    "label": "CHAPTER II",
    "type": {"key": "/type/toc_item"},
    "title": "THE COUNTRY AND THE MISSION 2",
    "pageIndex": undefined,
  }
]

let br;
beforeEach(() => {
  $.ajax = jest.fn().mockImplementation((args) => {
    return Promise.resolve([{
      table_of_contents: SAMPLE_TOC,
    }]);
  });
  document.body.innerHTML = '<div id="BookReader">';
  br = new BookReader();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Plugin: Menu Toggle', () => {
  test('has option flag', () => {
    expect(BookReader.defaultOptions.enableChaptersPlugin).toEqual(true);
  });
  test('has added BR property: olHost', () => {
    expect(br).toHaveProperty('olHost');
    expect(br.olHost).toBeTruthy();
  });
  test('has added BR property: bookId', () => {
    expect(br).toHaveProperty('bookId');
    expect(br.bookId).toBeFalsy();
  });
  test('fetches OL Book Record on init', () => {
    br.getOpenLibraryRecord = jest.fn();
    br.init();
    expect(br.getOpenLibraryRecord).toHaveBeenCalled();
  });
  test('Updates Table of Contents when available', () => {
    br.init();
    expect($.ajax).toHaveBeenCalled();
  });
});

describe('updateTOCState', () => {

  beforeEach(() => {
    // sinon.stub(window.Element, 'scrollIntoView');
    window.HTMLElement.prototype.scrollIntoView = function() {};
    br.getPageIndex = (str) => parseInt(str);
    //sinon.stub(br, 'getPageIndex').callsFake((str) => parseInt(str));
    br.init();
  });

  test('Test page is one of TOC', () => {
    br.updateTOCState(20, SAMPLE_TOC);
    expect($('li.table-contents-el')[1].classList.contains('current-chapter'));
  });

  test('Only one element has .current-chapter', () => {
    br.updateTOCState(9, SAMPLE_TOC);
    expect($('li.table-contents-el.current-chapter').length).toBe(1);
  })

  test('No chapter has .current-chapter if current index is < than any chapter index', () => {
    br.updateTOCState(1, SAMPLE_TOC);
    expect($('li.table-contents-el.current-chapter').length).toBe(0);
  })

  test('if current index == chapter index ', () => {
    br.updateTOCState(17, SAMPLE_TOC);
    expect($('li.table-contents-el')[1].classList.contains('current-chapter'));
  })

  test('No chapter has .current-chapter if all chapter have undefined pageIndex ', () => {
    br.updateTOCState(10, SAMPLE_TOC_UNDEF);
    expect($('li.table-contents-el.current-chapter').length).toBe(0);
  })
});