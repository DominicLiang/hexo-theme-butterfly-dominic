
hexo.extend.helper.register('random', function (posts) {
    var index = Math.floor(Math.random() * posts.length);
    var random_post = posts.data[index];
    return `posts/${random_post.abbrlink}.html`;
})