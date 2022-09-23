require 'pry'
require '../../lib/shouty'

Before do
  @network = Shouty::Network.new
end

# 1: Putting s in parenthesis at line-5 means s is options here.
# 2: Putting / in between both person name means it can match with any of this two words.

Given("Lucy/Shaun is located {int} meter(s) from shaun") do |distance|
  @lucy = Shouty::Person.new
  @shaun = Shouty::Person.new
  @lucy.move_to(distance)
end

When("Shaun shouts {string}") do |message|
  @offered_message = message
  @shaun.shout(message)
end

Given('a person named Lucy') do
  @lucy = Shouty::Person.new(@network)
end

Given('a person named shaun') do
  @shaun = Shouty::Person.new(@network)
end

Given("Lucy/Shaun is located {int} meter(s) from shaun") do |distance|
  @lucy = Shouty::Person.new
  @shaun = Shouty::Person.new
  @lucy.move_to(distance)
end

Then("Lucy should hear shaun's message") do
  expect(@lucy.message_heard).to include @offered_message
end
