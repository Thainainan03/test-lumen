<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/jame', function () use ($router) {
    return 'jame';
});

$router->get('/key', function () use ($router) {
    return str_random(32);
});  

//RESTful API
$router->get('/get', 'Api\TestController@getItem');

$router->post('/post', 'Api\TestController@postItem');

$router->put('/put/{id}', 'Api\TestController@putItem');

$router->delete('/delete/{id}', 'Api\TestController@deleteItem');