console.log('JS loaded');

$(document).ready(handleReady);

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
    ${Object.values(employee).forEach((value) => {
        $('#employeeTable').append(`
        <td>
        ${value}
        </td>
        `)
    })}
    <td>
    <button class='deleteBtn'>Delete</button>
    </td>
    </tr>
    `)
};

function deleteEmployee(){
    $(this).closest('tr').remove();
}