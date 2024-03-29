/**
 * @author Script47 (https://github.com/Script47/Toast)
 * @description Toast - A Bootstrap 4.2+ jQuery plugin for the toast component
 * @version 0.7.1
 **/
(function (b) {
b.toast = function (c) {
    b("#toast-container").length || (b("body").prepend('<div id="toast-container" aria-live="polite" aria-atomic="true"></div>'), b("#toast-container").append('<div id="toast-wrapper"></div>'), b("body").on("hidden.bs.toast", ".toast", function () { b(this).remove() })); var h = "toast-" + (b(".toast").length + 1), a = "", e = a = "", f = "text-muted", g = "", q = c.title || "Notice!", r = c.subtitle || "", p = c.content || "", k = c.delay || -1, d = c.img, l = c.pause_on_hover || !1, m = !1, n = ""; switch (c.type || "info") {
        case "info": a =
            "bg-info"; g = f = e = "text-white"; break; case "success": a = "bg-success"; g = f = e = "text-white"; break; case "warning": case "warn": a = "bg-warning"; g = f = e = "text-white"; break; case "error": case "danger": a = "bg-danger", g = f = e = "text-white"
    }!1 !== l ? (c = Math.floor(Date.now() / 1E3) + k / 1E3, n = 'data-autohide="false"', l = 'data-hide-timestamp="' + c + '"') : n = -1 === k ? 'data-autohide="false"' : 'data-delay="' + k + '"'; a = '<div id="' + h + '" class="toast" role="alert" aria-live="assertive" aria-atomic="true" ' + n + " " + l + ">" + ('<div class="toast-header ' +
        a + " " + e + '">'); "undefined" !== typeof d && (a += '<img src="' + d.src + '" class="' + (d["class"] || "") + ' mr-2" alt="' + (d.alt || "Image") + '" ' + ("undefined" !== typeof d.title ? 'data-toggle="tooltip" title="' + d.title + '"' : "") + ">"); a = a + ('<strong class="mr-auto">' + q + "</strong>") + ('<small class="' + f + '">' + r + "</small>"); a += '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">'; a += '<span aria-hidden="true" class="' + g + '">&times;</span>'; a += "</button>"; a += "</div>"; "" !== p && (a += '<div class="toast-body">',
            a += p, a += "</div>"); a += "</div>"; b("#toast-wrapper").append(a); b("#toast-wrapper .toast:last").toast("show"); !1 !== l && (setTimeout(function () { m || b("#" + h).toast("hide") }, k), b(document).on("mouseover", "#" + h, function () { m = !0 }), b(document).on("mouseleave", "#" + h, function () { var a = Math.floor(Date.now() / 1E3), c = parseInt(b(this).data("hide-timestamp")); m = !1; a >= c && b(this).toast("hide") }))
}
})(jQuery);
