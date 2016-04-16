(function() {
    var app = angular.module('profile', []);

    app.controller('ProfileController', [ '$http', function($http) {
        var profile = this;

        profile.socials = socials;
        profile.posts = [];

        $http.get('http://fellyph.com.br/blog/wp-json/wp/v2/posts').success(function(data){
            profile.posts = data;
            console.log(profile.posts);
        });
    }]);

    var socials = [{
        url : 'http://www.fellyph.com.br/blog',
        titleUrl: 'a little about me',
        assets: '/assets/img/blog.png',
        title: 'Blog Fellyph Cintra',
        alt: 'WordPress icon'},
    {
        url : 'https://br.linkedin.com/pub/fellyph-cintra/10/19/918',
        titleUrl: 'more professional information',
        assets: '/assets/img/linkedin.png',
        title: '@fellyph',
        alt: 'linkedin icon'},
    {
        url : 'http://www.facebook.com/FellyphBlog',
        titleUrl: 'like my fanpage',
        assets: '/assets/img/facebook.png',
        title: 'facebook fanpage',
        alt: 'facebook icon' },
    {
        url : 'http://www.twitter.com/fellyph',
        titleUrl: 'follow me on twitter',
        assets: '/assets/img/twitter.png',
        title: '@fellyph',
        alt:'twitter icon'},
    {
        url: 'http://www.github.com/fellyph',
        titleUrl: 'check my github',
        assets: '/assets/img/github.png',
        title: 'Github Fellyph',
        alt: 'Github icon'},
    {
        url: 'http://www.slideshare.net/fellyph/',
        titleUrl: 'Click here and check my slideshare',
        assets: '/assets/img/slideshare.png',
        title: 'slideshare Fellyph Cintra',
        alt: 'Slideshare icon'
    }];
})();

