#Hello Wolrd
=begin
 1- Print "Hello World" to the console
 p "Hello World"
==> "Hello World

=end

=begin
adjective = "Big Bad"
2-Interpolate the adjective variable into the Hello World string using #{}
p "Hello #{adjective} World"
==> "Hello Big Bad World"
=end

=begin
3-Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to all uppercased letters.
x = "Hello World"
p x.upcase
==>"HELLO WORLD"
=end

#Nums Array and Enumerables

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# 1.Use .uniq to print the array with all duplicate entries removed

# p nums.uniq
# ==> [5, 6, 7, 2, 4, 3, 1, 9, 0, 35, 19, 66, 22, 21, 12, 15]

# 2. Next, use .push and .pop , .shift .unshift and .length on the array as you would with javaScript (if you need to add a number, add 5)

# p nums.uniq.push(5) 
# ==> [5, 6, 7, 2, 4, 3, 1, 9, 0, 35, 19, 66, 22, 21, 12, 15, 5]
# p nums.uniq.pop(5)
# ==> [66, 22, 21, 12, 15]
# p nums.uniq.shift(5)
# ==> [5, 6, 7, 2, 4]
# p nums.uniq.unshift(99)
# ==> [99, 5, 6, 7, 2, 4, 3, 1, 9, 0, 35, 19, 66, 22, 21, 12, 15]
# p nums.length
# ==> 30
# p nums.uniq.length
# ==> 16

# 3.Use .include? to check if the array contains the number 8

# p nums.include?(8)
# ==> false

# 4. Use .find_all to find all the numbers greater than 10

# p nums.find_all { |obj| obj>10}
# ==> [35, 19, 66, 22, 21, 12, 15]

# 5. use .all? to check if all the numbers are greater than 0?

#  p nums.all? {|obj| obj > 0}
#  ==> false

# 6. use any? to check if there are any numbers that are divisible by 8

# p nums.any? {|obj| obj % 8 == 0}
# ==> true 

# 7. use .count to let you know how many numbers are greater than 4
# p nums.count {|obj| obj > 4}
# ==> 14

# 8. use .each_with_index to print each item times its index
# nums.each_with_index do | obj, index |
#     p "#{index} * #{obj} = #{index * obj}"
# end

# ==> 

=begin
"0 * 5 = 0"
"1 * 5 = 5"
"2 * 6 = 12"
"3 * 7 = 21"
"4 * 2 = 8"
"5 * 4 = 20"
"6 * 3 = 18"
"7 * 2 = 14"
"8 * 1 = 8"
"9 * 9 = 81"
"10 * 7 = 70"
"11 * 6 = 66"
"12 * 0 = 0"
"13 * 0 = 0"
"14 * 35 = 490"
"15 * 19 = 285"
"16 * 66 = 1056"
"17 * 3 = 51"
"18 * 22 = 396"
"19 * 21 = 399"
"20 * 4 = 80"
"21 * 4 = 84"
"22 * 4 = 88"
"23 * 0 = 0"
"24 * 1 = 24"
"25 * 2 = 50"
"26 * 3 = 78"
"27 * 4 = 108"
"28 * 12 = 336"
"29 * 15 = 435"

=end

# 9. .find the number that is divisible by 7 and 5 and is greater than 0

# p nums.find { |obj| obj % 7 == 0 && obj % 5 == 0 && obj >0}
# ==> 35

# 10. .find_index of the number that is divisible by 5 and 7 and is greater than 0

# p nums.find_index {  |obj| obj % 7 == 0 && obj % 5 == 0 && obj >0 }
# ==> 14

#11 . return the .first 3 numbers
# p nums.first(3)
# ==> [5, 5, 6]

# 12. return the .last 5 numbers
# p nums.last(5)
# ==>[2, 3, 4, 12, 15]

#13 .group_by the modulo of 3 ( % 3 )

# p nums.group_by { |obj| obj % 3 }
# ==> {2=>[5, 5, 2, 2, 35, 2], 0=>[6, 3, 9, 6, 0, 0, 66, 3, 21, 0, 3, 12, 15], 1=>[7, 4, 1, 7, 19, 22, 4, 4, 4, 1, 4]

#14 use minmax to return the smallest and largest number

# p nums.minmax
# ==> [0, 66]

#15 use .reject to return all the numbers that are NOT divisible by 3

# p nums.reject {|obj| obj % 3 == 0}
# ==> [5, 5, 7, 2, 4, 2, 1, 7, 35, 19, 22, 4, 4, 4, 1, 2, 4]

#16 use .select to return all the numbers divisible by 5
# p nums.select {|obj| obj % 5 == 0}
# ==> [5, 5, 0, 0, 35, 0, 15]

#Color Array

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
# 1-Print out a random color.

# p colors.sample
# ==> first try "orange"
# ==> second try "green"

# 2-Print out the colors array in reverse order.
# p colors.reverse
# ==>["violet", "indigo", "blue", "green", "yellow", "orange", "red"]

#3-Print out all of the colors in the array with all capital letters.
# p colors.map(&:upcase)
# ==> ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "INDIGO", "VIOLET"]

#Methods

#Write a method named find_area that finds the area of a rectangle when given values for width and height

# def find_area
#     width = 7
#     height = 10
# find_area = width * height
# end 
# puts "area Of Rectangle is: #{find_area}"
# ==> 70


# Write a method named multiply_each_by_five that will loop over the given nums array below and print each number multiplied by 5

# def multiply_each_by_five
# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
# multiply_each_by_five = nums.map {|x| x*5 }
# end

# p multiply_each_by_five
# ==> [25, 25, 30, 35, 10, 20, 15, 10, 5, 45, 35, 30, 0, 0]

##Methods with a Hash

# Hashes

# Hashes

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}


p book [:price]

#1 - Write a method named print_price that will take in any hash and return the price of the item.



# Euler Problem 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

total = 0

(1...1000).each do |i|

    if i % 3 == 0 && i % 5 == 0
        total += i
    elsif i % 5 == 0
        total += i
    elsif i % 3 == 0
        total += i
    end      
end

puts total

  