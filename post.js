" use strict";
const post = {
    bindings: {
        post: "<",
        deletePost: "&",
        index: "<"
    },
    template: `
    <section class="posts">
    <h3>{{ $ctrl.post.title }}</h3>
    <p>{{ $ctrl.post.subject }}</p>
    <i class="material-icons" ng-click="$ctrl.deletePost({ index: $ctrl.index });">clear</i>
    </section>
`,
    controller: function () {

    }
};


angular
    .module("App")
    .component("post", post)