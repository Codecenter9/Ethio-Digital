<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Basic Meta Tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Meskot Digital Solutions">
    <meta name="robots" content="index, follow">

    <!-- Title -->
    <title inertia>{{ config('app.name', 'MeskotDigital') }}</title>

    <!-- Favicon & App Icons -->
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('android-chrome-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="512x512" href="{{ asset('android-chrome-512x512.png') }}">
    <meta name="theme-color" content="#ffffff">

    <meta name="robots" content="index, follow">

    <!-- SEO Defaults -->
    <meta name="description"
        content="Meskot Digital Solutions is a creative and technology-driven company specializing in software development, digital marketing, graphics design, social media management, and content creation.">
    <meta name="keywords"
        content="Meskot Digital Solutions, software development, web development, mobile apps, digital marketing, SEO, social media management, content creation, graphics design, branding, Ethiopia tech company">
    <link rel="canonical" href="https://meskotdigitals.com">

    <!-- Open Graph / Social Media Defaults -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_US">
    <meta property="og:site_name" content="Meskot Digital Solutions">
    <meta property="og:url" content="https://meskotdigitals.com">
    <meta property="og:title" content="Meskot Digital Solutions | Software Development, Marketing & Creative Services">
    <meta property="og:description"
        content="Meskot Digital Solutions is a creative and technology-driven company specializing in software development, digital marketing, graphics design, social media management, and content creation.">
    <meta property="og:image" content="https://meskotdigitals.com/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Meskot Digital Solutions banner">


    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@meskotdigitals">
    <meta name="twitter:creator" content="@meskotdigitals">
    <meta name="twitter:title" content="Meskot Digital Solutions | Software Development, Marketing & Creative Services">
    <meta name="twitter:description"
        content="Meskot Digital Solutions is a creative and technology-driven company specializing in software development, digital marketing, graphics design, social media management, and content creation.">
    <meta name="twitter:image" content="https://meskotdigitals.com/og-image.jpg">
    <meta name="twitter:image:alt" content="Meskot Digital Solutions banner">

    <!-- PWA Manifest -->
    <link rel="manifest" href="{{ asset('manifest.json') }}">

    <!-- Vite + Inertia -->
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @inertiaHead
</head>


<body className="">
    @inertia
</body>

</html>
