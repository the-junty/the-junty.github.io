<?php
require 'vendor/autoload.php';

use Junty\Runner\JuntyRunner;
use Gabrieljmj\JuntyMinify\{Css as CssMinifier, Js as JsMinifier};

$junty = new JuntyRunner();

$junty->group('minify', function () {
    $junty->task('css', function () {
        $this->src('./public/css/*.css')
            ->forStreams(new CssMinifier())
            ->forStreams($this->toDir('./public/dist/css/'));
    });

    $junty->task('js', function () {
        $this->src('./public/dist/js/*.js')
            ->forStreams(new JsMinifier())
            ->forStreams($this->toDir('./public/dist/js/'));
    });
});

return $junty;