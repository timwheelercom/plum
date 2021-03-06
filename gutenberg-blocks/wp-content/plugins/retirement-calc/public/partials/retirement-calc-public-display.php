<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    retirement_calc
 * @subpackage retirement_calc/public/partials
 * 
 * 
 * 
 * 
 */
?>
<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <!-- Place favicon.ico in the root directory -->

  <!--<link rel="stylesheet" href="css/normalize.css">-->
  <link rel="stylesheet" href="../css/main.css">
</head>

<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->

  <!-- Add your site or application content here -->
  <div class="container">
    <div class="calculator-container">
      <!--<img class="logo" src="img/plum-logo.svg">-->
      <form id="calculator" method="post">
        <h3 class="text-center">How Much Will Your Retirement Cost</h3>
        <div id="page-1" class="form-group">
          <input id="ageInput" class="form-control" type="text" placeholder="Current Age" required autofocus>
          <input id="annualIncomeInput" class="form-control" type="text" placeholder="Annual Income" required>
          <button id="nextBtn-1" class="nextBtn btn btn-primary btn-block" type="submit">Next</button>
        </div>
        <div id="page-2" class="displayNone form-group">
          <input id="currentRetirementSavingsInput" class="form-control" type="text" placeholder="Current Retirement Savings" required autofocus>
          <input id="percentageAnnualRaisesInput" class="form-control" type="text" placeholder="Percentage Annual Raises" required>
          <button id="nextBtn-2" class="nextBtn btn btn-primary btn-block" type="submit">Next</button>
        </div>
        <div id="page-3" class="displayNone form-group">
          <input id="expectedRetirementAgeInput" class="form-control" type="text" placeholder="Expected Retirement Age" required autofocus>
          <input  id="expectedRetirementLengthInput" class="form-control" type="text" placeholder="Expected Years in Retirement" required>
          <button id="nextBtn-3" class="nextBtn btn btn-primary btn-block" type="submit">Next</button>
        </div>
        <div id="page-4" class="displayNone form-group">
          <input id="percentPreRetirementIncomeInput" class="form-control" type="text" placeholder="Percent Pre-Retirement Income" required autofocus>
          <input id="taxReturnBeforeRetirementInput" class="form-control" type="text" placeholder="Tax Return Before Retirement" required>
          <input id="taxReturnAfterRetirementInput" class="form-control" type="text" placeholder="Tax Return After Retirement" required>
          <button id="nextBtn-4" class="nextBtn btn btn-primary btn-block" type="submit">Next</button>
        </div>
        <div id="page-5" class="displayNone form-group">
          <input id="clientFirstNameInput" class="form-control" type="text" placeholder="First Name" required autofocus>
          <input id="clientLastNameInput" class="form-control" type="text" placeholder="Last Name" required>
          <input id="clientEmailInput" class="form-control" type="text" placeholder="Email" required>
          <input id="clientPhoneInput" class="form-control" type="text" placeholder="Phone" required>
          <button id="submitBtn" class="nextBtn btn btn-primary btn-block" type="submit">Submit</button>
        </div>

      </form>

      <div id="clientInfo" class="displayNone">
        <p id="age">Age: </p>
        <p id="annualIncome">Annual Income: </p>
        <p id="currentRetirementSavings">Current Retirement Savings: </p>
        <p id="percentageAnnualRaises">Percentage of Annual Raises: </p>
        <p id="expectedRetirementAge">Expected Retirement Age: </p>
        <p id="expectedRetirementLength">Expected Retirement Length: </p>
        <p id="percentPreRetirementIncome">Percentage Pre-Retirement Income: </p>
        <p id="taxReturnBeforeRetirement">Tax Returns Before Retirement: </p>
        <p id="taxReturnAfterRetirement">Tax Returns After Retirement: </p>
        <p id="clientFirstName">First Name: </p>
        <p id="clientLastName">Last Name: </p>
        <p id="clientEmail">Email: </p>
        <p id="clientPhone">Phone: </p>
      </div>

    </div>
  </div>



  <!--<script src="js/vendor/modernizr-{{MODERNIZR_VERSION}}.min.js"></script>-->
  <!--<script src="https://code.jquery.com/jquery-{{JQUERY_VERSION}}.min.js" integrity="{{JQUERY_SRI_HASH}}" crossorigin="anonymous"></script>-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="../js/plugins.js"></script>
  <script src="../js/main.js"></script>

  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async defer></script>
</body>

</html>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->
