document.getElementById("calculateButton").onclick = function(){
    var income = document.getElementById("monthlyIncome").value;
    var sssContribution= document.getElementById("sssContribution").value;
    var philhealthContribution = document.getElementById("philhealthContribution").value;
    var pagibigContribution = document.getElementById("pagibigContribution").value;
    var totalContribution = document.getElementById("totalContribution").value;
    var taxableIncome = document.getElementById("taxableIncome").value;
    var incomeTax = document.getElementById("incomeTax").value;
    var  netPay = document.getElementById("netPay").value;

    
   

    	//SSS CONTRIBUTION
			
			if(income < 999.99) {
                sssContribution = 0.00;
			}
			else if(income >= 100 && income <= 1249.99){
				sssContribution = 36.30;
			}
			else if(income >= 1250 && income <= 1749.99){
				sssContribution = 54.50;
			}
			else if(income >= 1750 && income <= 2249.99){
				sssContribution = 72.70;
			}
			else if(income >= 2250 && income <= 2749.99){
				sssContribution = 90.80;
			}
			else if(income >= 2750 && income <= 3249.99){
				sssContribution = 109.00;
			}
			else if(income >= 3250 && income <= 3749.99){
				sssContribution = 127.20;
			}
			else if(income >= 3750 && income <= 4249.99){
				sssContribution = 145.30;
			}
			else if(income >= 4250 && income <= 4749.99){
				sssContribution = 163.50;
			}
			else if(income >= 4750 && income <= 5249.99){
				sssContribution = 181.70;
			}
			else if(income >= 5250 && income <= 5749.99){
				sssContribution = 199.80;
			}
			else if(income >= 5750 && income <= 6249.99){
				sssContribution = 218.00;
			}
			else if(income >= 6250 && income <= 6749.99){
				sssContribution = 236.20;
			}
			else if(income >= 6750 && income <= 7249.99){
				sssContribution = 254.30;
			}
			else if(income >= 7250 && income <= 7749.99){
				sssContribution = 272.50;
			}
			else if(income >= 7750 && income <= 8249.99){
				sssContribution = 290.70;
			}
			else if(income >= 8250 && income <= 8749.99){
				sssContribution = 308.80;
			}
			else if(income >= 8750 && income <= 9249.99){
				sssContribution = 	327.00;
			}
			else if(income >= 9250 && income <= 9749.99){
				sssContribution = 345.20;
			}
			else if(income >= 9750 && income <= 10249.99){
				sssContribution = 363.30;
			}
			else if(income >= 10250 && income <= 10749.99){
				sssContribution = 381.50;
			}
			else if(income >= 10750 && income <= 11249.99){
				sssContribution = 399.70;
			}
			else if(income >= 11250 && income <= 11749.99){
				sssContribution = 417.80;
			}
			else if(income >= 11750 && income <= 12249.99){
				sssContribution = 436.00;
			}
			else if(income >= 12250 && income <= 12749.99){
				sssContribution = 454.20;
			}
			else if(income >= 12750 && income <= 13249.99){
				sssContribution = 472.30;
			}
			else if(income >= 13250 && income <= 13749.99){
				sssContribution = 490.50;
			}
			else if(income >= 13750 && income <= 14249.99){
				sssContribution = 508.70;
			}
			else if(income >= 14250 && income <= 14749.99){
				sssContribution = 526.80;
			}
			else if(income >= 14750 && income <= 15249.99){
				sssContribution = 545.00;
			}
			else if(income >= 15250 && income <= 15749.99){
				sssContribution = 563.20;
			}
			else {
				sssContribution = 581.30;
			}
			
			
            //PHILHEALTH CONTRIBUTON
			if(income <= 0){
                philhealthContribution = 0.00;
            }
			else if(income < 0 && income <= 10000) {
				philhealthContribution = 275.00;
			}
			else if(income >= 10000.01 && income < 39999.99) {
				philhealthContribution = income*.0275;
			}
			else {
				philhealthContribution = 1100;
			}


            //PAG-IBIIG CONTRIBUTION
			
			if(income < 5000){
				pagibigContribution = income*.02;
			}
			else {
				pagibigContribution = 100;
			}

            //TOTAL CONTRIBUTION
            totalContribution = sssContribution + philhealthContribution + pagibigContribution;


            //taxable income
			taxableIncome = income - (totalContribution);



            //Income Tax
			// (((taxableIncome*12)-minimum)*percent)/12
			var annualSalary = taxableIncome*12;
			
			if(annualSalary <= 250000) {
				incomeTax = 0.00;
			}
			else if(annualSalary >= 250000.01 && annualSalary <= 400000) {
				incomeTax = ((annualSalary - 250000)*.20)/12;
			}
			else if(annualSalary >= 400000.01 && annualSalary <= 800000) {
				incomeTax = (30000 + ((annualSalary - 400000)*.25))/12;
			}
			else if(annualSalary >= 800000.01 && annualSalary <= 2000000) {
				incomeTax = (130000 + ((annualSalary - 800000)*.30))/12;
			}
			else if(annualSalary >= 2000000.01 && annualSalary <= 8000000) {
				incomeTax = (490000 + ((annualSalary - 2000000)*.32))/12;
			}
			else {
				incomeTax = (2410000 +((annualSalary - 8000000)*.35))/12;
			}
			

            //NET PAY CALCULATION
			
			netPay = taxableIncome  - incomeTax;


            document.getElementById("sssContribution").value = sssContribution.toFixed(2);
            document.getElementById("philhealthContribution").value = philhealthContribution.toFixed(2);
            document.getElementById("pagibigContribution").value = pagibigContribution.toFixed(2);
            document.getElementById("totalContribution").value = totalContribution.toFixed(2);
            document.getElementById("taxableIncome").value = taxableIncome.toFixed(2);
            document.getElementById("incomeTax").value = incomeTax.toFixed(2);
            document.getElementById("netPay").value = netPay.toFixed(2);
};

			// CLEAR BUTTON 
document.getElementById("clearButton").onclick = function(){
   
    document.getElementById("monthlyIncome").value = null;
    document.getElementById("sssContribution").value = null;
    document.getElementById("philhealthContribution").value = null;
    document.getElementById("pagibigContribution").value =null;
    document.getElementById("totalContribution").value =null;
    document.getElementById("taxableIncome").value = null;
    document.getElementById("incomeTax").value = null;
    document.getElementById("netPay").value = null;
};