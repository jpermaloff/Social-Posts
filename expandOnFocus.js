function expandOnFocus() {
    return {
        replace: false,
        restrict: "A",
        link: function ($scope, $element, $attrs) {
            $element.on("focus", () => {
                $element
                    .css("width", "200px")
                    .css("height", "50px")
                    .css("font-size", "40px")
            });
            $element.on("blur", () => {
                $element
                    .css("width", "")
                    .css("height", "")
                    .css("font-size", "")
            })
        }
    };
};

angular
    .module("App")
    .directive("expandOnFocus", expandOnFocus)