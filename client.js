console.log('JS loaded');

$(document).ready(handleReady);

let totalMonthlySalary = 0;

employeesSalaryArray = [];

function handleReady(){
    $('#submitBtn').on('click', addEmployee);
    $('#employeeTable').on('click', '.deleteBtn', deleteEmployee);
}

function addEmployee(){
    console.log('Clicked submit button!');
    let employeesInfo = {
        firstName : $('#firstName').val(),
        lastName : $('#lastName').val(),
        employeeId : $('#idField').val(),
        jobTitle : $('#titleField').val(),
        annualSalary : $('#salaryField').val()
    }
    employeesSalaryArray.push(employeesInfo.annualSalary);

    employeeToTable(employeesInfo)
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idField').val('');
    $('#titleField').val('');
    $('#salaryField').val('');
}

function employeeToTable(employee){
    $('#employeeTable').append(`
    <tr>
    <td>
    ${employee.firstName}
    </td>
    <td>
    ${employee.lastName}
    </td>
    <td>
    ${employee.employeeId}
    </td>
    <td>
    ${employee.jobTitle}
    </td>
    <td>
    ${employee.annualSalary}
    </td>
    <td>
    <button class='deleteBtn'>Delete</button>
    </td>
    </tr>
    `
    )
    updateTotal();
}

function deleteEmployee(){
    $(this).closest('tr').remove();
}

function updateTotal(){
    for (let i = 0; i < employeesSalaryArray.length; i++){
        totalMonthlySalary += parseInt(employeesSalaryArray[i]);
    }
    $('#monthlyTotal').replaceWith(`Total Monthly: ${totalMonthlySalary}`)
    if (totalMonthlySalary > 20000){
        $('#monthlyTotal').addClass('red')
    };

}