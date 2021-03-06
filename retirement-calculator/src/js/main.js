const calculator = {

  nextBtn: {
    btn1: document.getElementById('nextBtn-1'),
    btn2: document.getElementById('nextBtn-2'),
    btn3: document.getElementById('nextBtn-3'),
    btn4: document.getElementById('nextBtn-4'),
    submitBtn: document.getElementById('submitBtn')
  },

  pages: {
    pg1: document.getElementById('page-1'),
    pg2: document.getElementById('page-2'),
    pg3: document.getElementById('page-3'),
    pg4: document.getElementById('page-4'),
    pg5: document.getElementById('page-5')
  },

  clientInput: {
    age: document.getElementById('ageInput'),
    annualIncome: document.getElementById('annualIncomeInput'),
    currentRetirementSavings: document.getElementById('currentRetirementSavingsInput'),
    percentageAnnualRaises: document.getElementById('percentageAnnualRaisesInput'),
    expectedRetirementAge: document.getElementById('expectedRetirementAgeInput'),
    expectedRetirementLength: document.getElementById('expectedRetirementLengthInput'),
    percentPreRetirementIncome: document.getElementById('percentPreRetirementIncomeInput'),
    taxReturnBeforeRetirement: document.getElementById('taxReturnBeforeRetirementInput'),
    taxReturnAfterRetirement: document.getElementById('taxReturnAfterRetirementInput'),
    firstName: document.getElementById('clientFirstNameInput'),
    lastName: document.getElementById('clientLastNameInput'),
    email: document.getElementById('clientEmailInput'),
    phone: document.getElementById('clientPhoneInput')
  },

  clientInfo: {
    section: document.getElementById('clientInfo'),
    age: document.getElementById('age'),
    annualIncome: document.getElementById('annualIncome'),
    currentRetirementSavings: document.getElementById('currentRetirementSavings'),
    percentageAnnualRaises: document.getElementById('percentageAnnualRaises'),
    expectedRetirementAge: document.getElementById('expectedRetirementAge'),
    expectedRetirementLength: document.getElementById('expectedRetirementLength'),
    percentPreRetirementIncome: document.getElementById('percentPreRetirementIncome'),
    taxReturnBeforeRetirement: document.getElementById('taxReturnBeforeRetirement'),
    taxReturnAfterRetirement: document.getElementById('taxReturnAfterRetirement'),
    firstName: document.getElementById('clientFirstName'),
    lastName: document.getElementById('clientLastName'),
    email: document.getElementById('clientEmail'),
    phone: document.getElementById('clientPhone'),
    firstNameResult: document.getElementById('firstNameResult'),
    lastNameResult: document.getElementById('lastNameResult'),
    annualIncomeResult: document.getElementById('annualIncomeResult'),
    beginRetirementAmountResult: document.getElementById('beginRetirementAmountResult'),
    currentSavingsGrowthResult: document.getElementById('currentSavingsGrowthResult'),
    shortfallResult: document.getElementById('shortfallResult'),
    salaryPercentageResult: document.getElementById('salaryPercentageResult'),
    endResult: document.getElementById('endResult')

  },


};

const client = {
  age: '', // 20 - 80
  annualIncome: '', // $0 - $500k
  currentRetirementSavings: '', // $0 - $500K
  percentageAnnualRaises: '', // 0% - 12%
  expectedRetirementAge: '', // 35 - 85
  expectedRetirementLength: '', // 0 - 40
  percentPreRetirementIncome: '', // 0% - 100%
  taxReturnBeforeRetirement: '', // 0% - 10%
  taxReturnAfterRetirement: '', // 0% - 10%
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
};

const handlers = {

  setupEventListeners: () => {
    const form = document.getElementById('calculator');

    form.addEventListener('click', (e) => {
      e.preventDefault();

      if(e.target.id === 'nextBtn-1') {
        calculator.pages.pg1.style.display = 'none';
        calculator.pages.pg2.style.display = 'block';
        // handlers.updateClientAge();
        handlers.updateClientAnnualIncome();
        progress.increment(20);
      }

      if(e.target.id === 'nextBtn-2') {
        calculator.pages.pg2.style.display = 'none';
        calculator.pages.pg3.style.display = 'block';
        // handlers.updateClientCurrentRetirementSavings();
        // handlers.updateClientPercentageAnnualRaises();
        progress.increment(20);
      }

      if(e.target.id === 'nextBtn-3') {
        calculator.pages.pg3.style.display = 'none';
        calculator.pages.pg4.style.display = 'block';
        // handlers.updateClientExpectedRetirementAge();
        // handlers.updateClientExpectedRetirementLength();
        progress.increment(20);
      }

      if(e.target.id === 'nextBtn-4') {
        calculator.pages.pg4.style.display = 'none';
        calculator.pages.pg5.style.display = 'block';
        // handlers.updateClientPercentPreRetirementIncome();
        // handlers.updateClientTaxReturnBeforeRetirement();
        // handlers.updateClientTaxReturnAfterRetirement();
        progress.increment(20);
      }

      if(e.target.id === 'submitBtn') {
        calculator.pages.pg4.style.display = 'none';
        handlers.updateClientFirstName();
        handlers.updateClientLastName();
        handlers.generateReport();
        // handlers.generateReport();
        // handlers.updateClientEmail();
        // handlers.updateClientPhone();
        // calculator.clientInfo.section.style.display = 'block';
        console.log(client);
        // console.log(JSON.stringify(client));
        progress.complete();

        $.ajax({
          type: "POST",
          url: "https://mandrillapp.com/api/1.0/messages/send.json",
          data: {
            'key': 'xWpoj3QqZHv7pDNIz1VJEg',
            'message': {
              'from_email': 'tim@devplum.com',
              'to': [
                {
                  'email': 'tim@devplum.com',
                  'name': 'Plum Direct Marketing',
                  'type': 'to'
                },
                {
                  'email': client.email,
                  'name': client.firstName + '' + client.lastName,
                  'type': 'to'
                }
              ],
              'autotext': 'true',
              'subject': 'Your Retirement Savings Report',
              'html': JSON.stringify(client)
            }
          }
        }).done(function(response) {
          console.log(response); // if you're into that sorta thing
        });
      }

    });
  },

  // setupEventListeners: () =>  {
  //   let pages = document.querySelectorAll('#calculator>div');
  //   for (let i = 0; i < pages.length; i++) {
  //     if (pages[i].style.display !== 'none') {
  //       pages[i].style.display = 'none';
  //       if (i === pages.length - 1) {
  //         pages[0].style.display = 'block';
  //         document.getElementById('clientInfo').style.display = 'block';
  //       } else {
  //           pages[i + 1].style.display = 'block';
  //       }
  //       break;
  //     }
  //   }
  // },

  // updateClientAge: () => {
  //
  //   client.age = calculator.clientInput.age.value;
  //   calculator.clientInfo.age.innerText = 'Age: ' + calculator.clientInput.age.value;
  //   client.age = calculator.clientInput.age.value = '';
  // },
  //

  updateClientFirstName: () => {
    client.firstName = calculator.clientInput.firstName.value;
    // calculator.clientInfo.firstName.innerText = 'First Name: ' + calculator.clientInput.firstName.value;
    calculator.clientInfo.firstNameResult.innerText = calculator.clientInput.firstName.value;
  },

  updateClientLastName: () => {
    client.lastName = calculator.clientInput.lastName.value;
    // calculator.clientInfo.lastName.innerText = 'Last Name: ' + calculator.clientInput.lastName.value;
    calculator.clientInfo.lastNameResult.innerText = calculator.clientInput.lastName.value;
  },

  updateClientAnnualIncome: () => {
    client.annualIncome = calculator.clientInput.annualIncome.value.replace(/[$,]/g, "");
    // calculator.clientInfo.annualIncome.innerText = 'Annual Income: $' + parseFloat(calculator.clientInput.annualIncome.value.replace(/,/g, ''));

  },

  generateReport: () => {
    calculator.clientInfo.annualIncomeResult.innerText = `$${parseFloat(client.annualIncome * 1.33).toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    calculator.clientInfo.beginRetirementAmountResult.innerText = `$${parseFloat(client.annualIncome * 17.33).toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    calculator.clientInfo.currentSavingsGrowthResult.innerText = `$${parseFloat(client.annualIncome * 17.33 * 1.08).toLocaleString('en-US', {minimumFractionDigits: 2})}`;
  },


  //
  // updateClientCurrentRetirementSavings: () => {
  //   client.currentRetirementSavings = calculator.clientInput.currentRetirementSavings.value;
  //   calculator.clientInfo.currentRetirementSavings.innerText = 'Current Retirement Savings: $' + parseFloat(calculator.clientInput.currentRetirementSavings.value.replace(/,/g, ''));
  //
  // },
  //
  // updateClientPercentageAnnualRaises: () => {
  //   client.percentageAnnualRaises = calculator.clientInput.percentageAnnualRaises.value;
  //   calculator.clientInfo.percentageAnnualRaises.innerText = 'Percentage of Annual Raises: ' + parseFloat(calculator.clientInput.percentageAnnualRaises.value.replace(/,/g, '')) + '%';
  //
  // },
  //
  // updateClientExpectedRetirementAge: () => {
  //   client.expectedRetirementAge = calculator.clientInput.expectedRetirementAge.value;
  //   calculator.clientInfo.expectedRetirementAge.innerText = 'Expected Retirement Age: ' + calculator.clientInput.expectedRetirementAge.value;
  //
  // },
  //
  // updateClientExpectedRetirementLength: () => {
  //   client.expectedRetirementLength = calculator.clientInput.expectedRetirementLength.value;
  //   calculator.clientInfo.expectedRetirementLength.innerText = 'Expected Retirement Length: ' + calculator.clientInput.expectedRetirementLength.value;
  //
  // },
  //
  // updateClientPercentPreRetirementIncome: () => {
  //   client.percentPreRetirementIncome = calculator.clientInput.percentPreRetirementIncome.value;
  //   calculator.clientInfo.percentPreRetirementIncome.innerText = 'Percentage Pre-Retirement Income: $' + parseFloat(calculator.clientInput.percentPreRetirementIncome.value.replace(/,/g, '')) + '%';
  //
  //
  // },
  //
  // updateClientTaxReturnBeforeRetirement: () => {
  //   client.taxReturnBeforeRetirement = calculator.clientInput.taxReturnBeforeRetirement.value;
  //   calculator.clientInfo.taxReturnBeforeRetirement.innerText = 'Tax Returns Before Retirement: $' + parseFloat(calculator.clientInput.taxReturnBeforeRetirement.value.replace(/,/g, ''));
  //
  //
  // },
  //
  // updateClientTaxReturnAfterRetirement: () => {
  //   client.taxReturnAfterRetirement = calculator.clientInput.taxReturnAfterRetirement.value;
  //   calculator.clientInfo.taxReturnAfterRetirement.innerText = 'Tax Returns After Retirement: $' + parseFloat(calculator.clientInput.taxReturnAfterRetirement.value.replace(/,/g, ''));
  //
  //
  // },

  // updateClientEmail: () => {
  //   client.email = calculator.clientInput.email.value;
  //   calculator.clientInfo.email.innerText = 'Email: ' + calculator.clientInput.email.value;
  // },
  // updateClientPhone: () => {
  //   client.phone = calculator.clientInput.phone.value;
  //   calculator.clientInfo.phone.innerText = 'Phone: ' + calculator.clientInput.phone.value;
  // },

};

// handlers.setupEventListeners(); // Setup event listeners for the form


// Progress bar
var progress = (function ($) {
  var progress = $('.progress'),
    progress_bar = $('.progress-bar'),
    total_width = progress.width();
  function calculatePercentage(increment_by,is_increment) {
    var progress_percentage;
    if (is_increment == true) {
      progress_percentage = Math.round((progress_bar.width() / total_width) * 100 + increment_by) ;
      progress_percentage = (progress_percentage > 100) ? 100 : progress_percentage;
    } else {
      progress_percentage = Math.round((progress_bar.width() / total_width) * 100 - increment_by) ;
      progress_percentage = (progress_percentage < 0) ? 0 : progress_percentage;
    }
    return progress_percentage;
  }
  return{
    increment: function (increment_by) {
      var progress_percentage = calculatePercentage(increment_by, true);
      progress_bar.css('width',progress_percentage + '%').attr('aria-valuenow', progress_percentage + ' %');
    },
    decrement: function (decrement_by) {
      var progress_percentage = calculatePercentage(decrement_by, false);
      progress_bar.css('width',progress_percentage+'%').attr('aria-valuenow', progress_percentage + ' %');
    },
    reset: function () {
      progress_bar.css('width',0 + '%').attr('aria-valuenow', 0 + ' %');
    },
    complete: function () {
      progress_bar.css('width',100 + '%').attr('aria-valuenow', 100 + ' %');
    }
  };
})( jQuery);







handlers.setupEventListeners();

// Examine these results carefully. As you can see, there is a lot of information to consider and the numbers may look large.

// The annual income that you will need in your first year of retirement:	$0

// When you begin retirement, you will need to have the following amount saved:	$0

// Assuming no additional contributions, your current savings will grow to:	$1

// Without additional savings, you will have a shortfall of:	$0

// You will need to save the following percentage of your salary each year:	0%

// In the first year, this works out to:	$0
