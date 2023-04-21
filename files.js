let numbers = [12,3,34,4,5,5,5,66];
var total_sum = 0;
for (var _ in numbers){
    total_sum = total_sum + numbers[_];
    console.log(`the sum till value, ${_}, is ${total_sum}`);
}
console.log(`the total sum of the given array is: ${total_sum}`);