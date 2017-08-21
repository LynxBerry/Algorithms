# learn: Do not use $input as parameter name. It is reserved for special purpose.
# Do not call function use C way like function(param). 
# Do not put test cases toghether with the code. The exception will break it unless using try.



#helper function
function RowNum {
	param(
		$char
	)
	
	switch -Regex ($char) {
		"[qwertyuiop]" {1;break}
		"[asdfghjkl]" {2;break}
		"[zxcvbnm]" {3;break}
		default {throw "invalid character: $char"}
	}
}

# Give a word and test whether all the characters in it belong to one row on the keyboard.
# Return $true if it is the case, otherwise $false
function TestGivenWord {
	param(
		[String] $givenWord # enforce the input is string
	)
	
	$result = $true
	$length = $givenWord.length
	write-host "The length of String is $length ."
	
	if ($length -eq 0) {
		throw "Empty String"
	}

	$rowId = 0 # 0 is intial value, 1 2 3 stand for different rows
	
	# Test the first character of the string to determine which row it initially belongs to.
	$rowId = RowNum $($givenWord[0])

	for($i = 0; $i -lt $length; $i++) {
		if($(RowNum $($givenWord[$i])) -ne $rowId) {
			$result = $false
			break
			
		}
		
	}
	
	$result
}



# successful case
TestGivenWord bcnm

#failed case
TestGivenWord wercc

#failed case containing invalid character
TestGivenWord kdf445weeo

#faild case the string is empty
TestGivenWord xxx


