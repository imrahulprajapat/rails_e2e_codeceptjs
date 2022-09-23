Feature: Hear shout

	To do:
		- only shout to people with certain distance(it never change something in test behaviour its just a message)

  # Background is used for moving common Scenario into single place
  Background:
    Given Lucy is located 15 meters from shaun

	Rule: Shouts can be heard by other users

	Scenario: Listner is within range
		# Given Lucy is located 15 meters from shaun
		When Shaun shouts "free bangles at shaun's"
		Then Lucy should hear shaun's message

	Scenario: Listner is within range
    # Given Lucy is located 15 meters from shaun
		When Shaun shouts "Free coffee!"
		Then Lucy should hear shaun's message

	Rule: Shouts should be heard if listner is within range

		Scenario: Listner is within range

		Scenario: Listner is out of range