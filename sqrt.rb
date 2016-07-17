#
# Adrian Statescu <mergesortv@gmail.com>
# This Method Computes SQuare RooT in Ruby.
# MIT License
#

def sqrt(n)

    an = n / 2.0

    anplus1 = ( an + (n / an).to_f ) / 2

    anEPS = 0.0001

    while (anplus1 - an).abs >= anEPS

       an = anplus1

       anplus1 = ( an + (n / an).to_f ) / 2

    end

   anplus1

end

puts "Enter n = "

n = gets.chomp

puts "sqrt(#{n}) = #{sqrt(n.to_i)}"