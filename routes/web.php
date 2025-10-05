<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\EmailController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\TeamsController;
use App\Http\Controllers\Client\CommentController;
use App\Http\Controllers\Client\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::fallback(function () {
    return Inertia::render('errors/404')->toResponse(request())->setStatusCode(404);
});

Route::get('/', [PageController::class, 'home'])->name('client.home');
Route::get('/about', [PageController::class, 'about'])->name('client.about');
Route::get('/teams', [PageController::class, 'teams'])->name('client.members');
Route::get('/team/{slug}', [PageController::class, 'singleteam'])->name('client.singlemember');
Route::get('/projects', [PageController::class, 'projects'])->name('client.projects');
Route::get('/services', [PageController::class, 'services'])->name('client.services');
Route::get('/contact', [PageController::class, 'contact'])->name('client.contact');
Route::get('/news', [PageController::class, 'news'])->name('client.news');
Route::get('/news/{slug}', [PageController::class, 'singlenew'])->name('client.singlenew');
Route::post('/emails/send', [PageController::class, 'store'])->name('emails.store');
Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');


Route::middleware(['auth'])
    ->prefix('admin')
    ->as('admin.')
    ->group(function () {
        Route::controller(DashboardController::class)->group(function () {
            Route::get('/', 'index')->name('dashboard');
        });
        Route::controller(ProjectController::class)->group(function () {
            Route::get('/projects', 'index')->name('projects');
            Route::post("/projects/store", "store")->name("projects.store");
            Route::put("/projects/update/{id}", "update")->name("projects.update");
        });
        Route::controller(BlogController::class)->group(function () {
            Route::get('/news', 'index')->name('news');
            Route::post("/news/store", "store")->name("news.store");
        });
        Route::controller(TeamsController::class)->group(function () {
            Route::get('/teams', 'index')->name('teams');
            Route::post("/teams/store", "store")->name("teams.store");
            Route::put("/profile/update/{id}", "update")->name("teams.update");
            Route::post("/profile/photo/update/{id}", "updatePhoto")->name("teams.photo-update");
            Route::post("/profile/photo/delete/{id}", "deletePhoto")->name("teams.photo-delete");
        });
        Route::controller(EmailController::class)->group(function () {
            Route::get('/emails', 'index')->name('emails');
            // Route::post("/emails/store", "store")->name("emails.store");
        });
    });


require __DIR__ . '/auth.php';
