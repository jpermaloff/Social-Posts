" use strict";
let form = false;
const socialPosts = {
    template: `
<h1>My Thoughts</h1>
<button ng-show="$ctrl.toggleElements" class="newThoughts" ng-click="$ctrl.hideForm();">New Thoughts</button>
<post-form ng-hide="$ctrl.toggleElements" on-submit="$ctrl.onSubmit(newPost);"></post-form>
<section class="allPosts">
<post delete-post="$ctrl.deletePost(index); 
"post= "post"
index= "$index"
ng-repeat="post in $ctrl.postList track by $index"></post>
</section>
`,
    controller: function () {
        const vm = this;
        vm.postList = [
            {
                title: "Deep Thoughts",
                subject: "Lorem ipsum dolor sit amet"
            },
            {
                title: "Reflections",
                subject: "Lorem ipsum dolor sit amet"
            }
        ];
        vm.toggleElements = true;
        vm.onSubmit = (newPost) => {
            vm.postList.unshift(angular.copy(newPost));
            vm.toggleElements = true;
        };
        vm.deletePost = (index) => {
            vm.postList.splice(index, 1);
        };
        vm.hideForm = () => {
            vm.toggleElements = false;
        }
    }
};




angular
    .module("App")
    .component("socialPosts", socialPosts)
