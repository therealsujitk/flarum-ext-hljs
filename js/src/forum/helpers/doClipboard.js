var clipboard = null;
export function doClipboard() {
    var pres = document.querySelectorAll('pre');
    [].forEach.call(pres, function (pre) {
        if( pre.className.indexOf("copy-ready") == -1 )
            pre.insertAdjacentHTML('afterBegin',
                '<button class="clipboard" data-clipboard-snippet=""><svg aria-hidden="true" role="img" class="clipboard-icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom;"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></button>'
            );
            pre.classList.add("copy-ready");
    });

    if(clipboard){
        clipboard.destroy();
    }

    clipboard = new ClipboardJS('[data-clipboard-snippet]', {
        target: function (trigger) {
            return trigger.nextElementSibling;
        }
    });

    const icon_s = "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z";
    const icon_o = "M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z";
    const icon_f = "M 3.72 3.72 a 0.75 0.75 0 0 1 1.06 0 L 8 6.94 l 3.22 -3.22 a 0.75 0.75 0 1 1 1.06 1.06 L 9.06 8 l 3.22 3.22 a 0.75 0.75 0 1 1 -1.06 1.06 L 8 9.06 l -3.22 3.22 a 0.75 0.75 0 0 1 -1.06 -1.06 L 6.94 8 L 3.72 4.78 a 0.75 0.75 0 0 1 0 -1.06 Z";

    clipboard.on('success', function (e) {
        console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);
        // console.info('classList', e.trigger.classList);
        
        
        e.trigger.classList.add("succeed");
        e.trigger.firstChild.firstChild.setAttribute("d",icon_s);

        e.trigger.setAttribute('aria-label', "Copied");

        setTimeout(function () {
            e.trigger.classList.remove("succeed");
            e.trigger.removeAttribute('aria-label');
            e.trigger.firstChild.firstChild.setAttribute("d",icon_o);
        }, 1000)

        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        console.error('Action:', e.action);
        // console.error('Trigger:', e.trigger);

        e.trigger.classList.add("failed");
        e.trigger.firstChild.firstChild.setAttribute("d",icon_f);

        e.trigger.setAttribute('aria-label', "error");

        setTimeout(function () {
            e.trigger.classList.remove("failed");
            e.trigger.removeAttribute('aria-label');
            e.trigger.firstChild.firstChild.setAttribute("d",icon_o);
        }, 1000)

        fallbackMessage(e.action);
    });

    function fallbackMessage(action) {
        var actionMsg = '';
        var actionKey = (action === 'cut' ? 'X' : 'C');
        if (/iPhone|iPad/i.test(navigator.userAgent)) {
            actionMsg = 'No support :(';
        } else if (/Mac/i.test(navigator.userAgent)) {
            actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
        } else {
            actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
        }
        console.error(actionMsg);
        alert(actionMsg);
    }
}
