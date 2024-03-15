	
window.alert("Hello world!");
//or
alert("Hello world!");

//overriding because alert - global obj
var alert = function(message){
 
    console.log("Message: ", message);
};
window.alert("Hello world!");

// if we declare some global var in the program, 
// then it is available as a property in the window obj:
var message = "hello";
console.log(window.message);

/*
window properties

    innerHeight: contains the height of the window, including horizontal scrollbars
    innerWidth: contains the width of the window, including vertical scroll bars

    outerHeight: contains the height of the browser window, including all browser scroll bars
    outerWidth: Contains the width of the browser window, including all browser scroll bars

    pageXOffset: alias for window.scrollX
    pageYOffset: alias for window.scrollY

    screenX: contains the X-axis position of the browser window, that is, the distance from the browser window to the left edge of the screen
    screenY: contains the X-axis position of the browser window, that is, the distance from the browser window to the top edge of the screen

    scrollX: contains the number of pixels of the web page scrolled horizontally
    scrollY: contains the number of pixels of the web page scrolled vertically
*/

//window position:
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.screenX);
console.log(window.screenY);
/*
|-Window1--|-----------------MenuBar----|
|--Toolbar--|------AddressBar-----------v
|-------------PersonalBar---------------e
|                                       r
|                                       t
|               Content                 s
|              (web page)               c
|                                       r
|                                       o
|                                       l
|                                       l
|---------HorizontalScrollBar-----------|
|--------------StatusBar----------------|

a web browser has a number of components:

    content area
    address bar for entering a URL or search query
    Status Bar, which indicates whether the web page has loaded or is in the process of loading
    Menu Bar
    ToolBar
    some "personal" panel, which, for example, contains bookmarks
    scroll bars that display horizontal and vertical position 

The window object has a number of properties to check for the presence of these components:
    
    locationbar: contains an object that indicates whether the address bar is displayed or not
    menubar: indicates whether the menu bar is displayed or not
    personalbar: indicates whether a personal bar (such as a bookmarks bar) is displayed or not
    scrollbars: indicates whether scrollbars are shown or not
    statusbar: indicates whether the status bar is displayed or not
    toolbar: indicates whether the toolbar is displayed or not
*/
console.log(window.personalbar); // BarProp {visible: true} или BarProp {visible: false}

/*
screen property
The screen property of the window object is also used to obtain information about the screen. 
This property represents an object of type Screen

    availTop: indicates the height of fixed components that flank the top side of the browser, 
        such as various top bars
    availLeft: indicates the width of fixed components that flank the left side of the browser, 
        such as various left panels
    availHeight: contains the maximum available height in pixels minus 
        the height of the top and bottom panels
    availWidth: contains the maximum available width in pixels minus 
        the width of the left and right panels

    colorDepth: contains the screen color depth
    pixelDepth: contains the screen pixel depth

    width: contains the screen width in pixels
    height: contains the screen height in pixels

    orientation: contains an object of type ScreenOrientation that provides information about 
        the orientation of the device
*/
console.log(screen.availTop);       // 0
console.log(screen.availLeft);      // 78
console.log(screen.availHeight);    // 1080
console.log(screen.availWidth);     // 1842
console.log(screen.width);          // 1920
console.log(screen.height);         // 1080
console.log(screen.pixelDepth);     // 24
console.log(screen.colorDepth);     // 24
