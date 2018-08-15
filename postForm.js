" use strict";
const postForm = {
bindings: {
onSubmit: "&",
},
template: `
<form class="" ng-submit="$ctrl.onSubmit({ newPost: $ctrl.postInfo });">
<label>Title</label><input expand-on-focus type="text" ng-model="$ctrl.postInfo.title">
    <label>Thought</label><textArea expand-on-focus rows=4 col=50 ng-model="$ctrl.postInfo.subject"></textarea>
<button class="addPost" ng-click="$ctrl.onSubmit">Add Post</button>
</form>
`
};

angular
    .module("App")
    .component("postForm", postForm)
    