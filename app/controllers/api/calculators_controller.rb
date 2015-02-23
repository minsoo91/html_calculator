class Api::CalculatorsController < ApplicationController
	def show
		@expression = params[:expression]
		begin
			@expression = @expression.split("")
			@expression.each do |char|
				if (char =~ /[A-Za-z]/) # prevent script injections
					raise SyntaxError
				elsif char == " "
					char.replace("+") # account for the + sign
				end
			end
			@expression = @expression.join("")
			@result = eval(@expression)
		rescue SyntaxError
			@result = "Invalid expression!"
		end
		render json: @result
	end
end
