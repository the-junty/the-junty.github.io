<?php
require 'vendor/autoload.php';

use Junty\Runner\JuntyRunner;
use Gabrieljmj\JuntyMinify\Css as CssMinifier;

$junty = new JuntyRunner();

$junty->task('css_minify', function () {
    $this->src('./public/css/*.css')
        ->forStreams(new CssMinifier())
        ->forStreams($this->toDir('./public/dist/css/'));
});

return $junty;