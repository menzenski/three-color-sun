// change between dark and light modes
function removeColorModes (el) {
    el.removeClass('tcs-dark-mode tcs-light-mode');
}
var colorSchemeButtons = [
    { btn_id: '#tcs-go-light', btn_mode: 'tcs-light-mode' },
    { btn_id: '#tcs-go-dark', btn_mode: 'tcs-dark-mode' }
];
$.each(colorSchemeButtons, function(idx, obj) {
    $.each(obj, function() {
        $(obj.btn_id).on('click', function() {
            removeColorModes($(':root'));
            $(':root').addClass(obj.btn_mode);
        });
    });
});

// change accent color
function removeAccentColors (el) {
    el.removeClass('tcs-accent-yellow tcs-accent-orange tcs-accent-red');
    el.removeClass('tcs-accent-magenta tcs-accent-violet tcs-accent-blue');
    el.removeClass('tcs-accent-cyan tcs-accent-green');
}
var accentColorButtons = [
    { btn_id: '#tcs-go-yellow', btn_mode: 'tcs-accent-yellow' },
    { btn_id: '#tcs-go-orange', btn_mode: 'tcs-accent-orange' },
    { btn_id: '#tcs-go-red', btn_mode: 'tcs-accent-red' },
    { btn_id: '#tcs-go-magenta', btn_mode: 'tcs-accent-magenta' },
    { btn_id: '#tcs-go-violet', btn_mode: 'tcs-accent-violet' },
    { btn_id: '#tcs-go-blue', btn_mode: 'tcs-accent-blue' },
    { btn_id: '#tcs-go-cyan', btn_mode: 'tcs-accent-cyan' },
    { btn_id: '#tcs-go-green', btn_mode: 'tcs-accent-green' },
];
$.each(accentColorButtons, function(idx, obj) {
    $.each(obj, function() {
        $(obj.btn_id).on('click', function() {
            removeAccentColors($('.tcs-accent, h2, a'));
            $('.tcs-accent, h2, a').addClass(obj.btn_mode);
        });
    });
});
