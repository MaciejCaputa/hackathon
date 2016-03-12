<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Flickr Search</title>
    <link rel="stylesheet" href="bower_components/angular-material/angular-material.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=RobotoDraft:400,500,700,400italic">
</head>
<body ng-cloak ng-app="flickrApp" ng-controller="ListController" layout-align="top center">

    <md-toolbar>
        <div class="md-toolbar-tools">
            <span class="md-flex">Flickr Search</span>
        </div>
    </md-toolbar>

    <md-content class="md-padding" layout="column">

        <div class="app-content">

            <form ng-submit="search()">
                <div ng-show="!isSearching">

                    <md-input-container class="long">
                        <label>Search for</label>
                        <input ng-model="searchTerm">
                    </md-input-container>
                </div>
                <md-progress-circular ng-if="isSearching" md-theme="blue" md-mode="indeterminate"></md-progress-circular>

            </form>

              <md-card ng-repeat="picture in results.photos.photo">
                <img ng-src="https://farm{{picture.farm}}.staticflickr.com/{{picture.server}}/{{picture.id}}_{{picture.secret}}_b.jpg" alt="" class="md-card-image">
                <span class="md-headline">{{picture.title}}</span>

              </md-card>
        </div>

    </md-content>


    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/angular-aria/angular-aria.min.js"></script>
    <script src="bower_components/angular-animate/angular-animate.min.js"></script>
    <script src="bower_components/hammerjs/hammer.min.js"></script>
    <script src="bower_components/angular-material/angular-material.min.js"></script>
    <script src="app.js"></script>

</body>
</html>