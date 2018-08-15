" use strict";
const postForm = {
bindings: {
onSubmit: "&",
hideForm: "&"
},
template: `
<form ng-submit="$ctrl.onSubmit({ newPost: $ctrl.postInfo });">
<label>Title</label><input type="text" ng-model="$ctrl.postInfo.title" ng-class="{ myFocus: focus, myBlur: blur }"    
    ng-focus="focus=true;blur=false;" ng-blur="blur=true;focus=false;">
    <label>Subject</label><textArea rows=4 col=50 ng-model="$ctrl.postInfo.subject" ng-class="{ myFocus: focus, myBlur: blur }"    
    ng-focus="focus=true;blur=false;" ng-blur="blur=true;focus=false;"></textarea>
<button ng-click="$ctrl.onSubmit">Add Post</button>
</form>
`
};
function expandOnFocus() {
    return {
    restrict: "A",
    template: `<label>Title</label><input type="text" ng-model="$ctrl.postInfo.title" ng-class="{ myFocus: focus, myBlur: blur }"    
    ng-focus="focus=true;blur=false;" ng-blur="blur=true;focus=false;">
    <label>Subject</label><textArea rows=4 col=50 ng-model="$ctrl.postInfo.subject" ng-class="{ myFocus: focus, myBlur: blur }"    
    ng-focus="focus=true;blur=false;" ng-blur="blur=true;focus=false;"></textarea>
    `,
    replace: true
    };
    };
    


angular
    .module("App")
    .component("postForm", postForm)
    .directive("expandOnFocus", expandOnFocus)