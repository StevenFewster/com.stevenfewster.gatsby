---
path: "/projects/site-suite-angular-feathers-project"
date: "2020-04-24"
title: FeathersJS/Angular App for Managing Logos
description: "Creating a Javascript application to manage internal sites and provide a consistent set of logos"
author: "Steven Fewster"
category: "projects"
cover: slidebean-hYN111MD_-M-unsplash.jpg
---

The benefit of working on hobby projects is that there's no one to hold you to account.  It can also be a problem for very obvious reasons!  So with this new one, let's eat my own dog food and start with the question (and publish the answer) to the question that should be driving every project you ever work on.

## What Problem Are We Trying To Solve?

At work recently someone put together a table of all the internal apps we use.  It sometimes takes something like that to give you a stark bit of insight in to how disparate your stuff looks as compared with big companies.  The Atlassian and Oracle applications stood out whereas our internal apps, I'm sorry to say (as I am the major culprit), looked like a jumbled hodge-podge.  So, to answer the question:

> There is a lack of cohesive identity and identity management for our internal applications.

An there we have it.  I've already managed to chuck in some scope-creep and we've barely started.

Namely - identity management. I've been using a tool for a while now to generate `ico` files and pngs (which I've now had to request whitelisting for), so let's replace that.  It would also be good to have APIs that could be queried to get images, a zip file for new project... Wait. As a list:

* Create a Logo
* Consistent "Look and Feel" for that logo
* Some method of overriding colour theme for problem colour scheme apps
* APIs to get:
    * Actual logo
    * List of sites and addresses
    * By environment (test, uat, prod etc)
    * Downloadable Zip file of assets

## Pick A Dev Stack

This is normally where I enter decision paralysis.  So many things I'd like to try and learn, ideal for a hobby project, but actually picking just ONE?? So, for a change, let's just stick with what I feel a good level of comfort with:

* FeathersJS (serving up an...)
* Angular app
* Bootstrap 4 (using Flatly theme

As I want a fairly quick turn round, we'll ignore that Bootstrap 5 is just round the corner.  I feel I can turn out something reasonable with this. I should do mobile-first, but I *know* it will only be used as a desktop App.  I'll see how I feel after I get started.

## Getting Started

