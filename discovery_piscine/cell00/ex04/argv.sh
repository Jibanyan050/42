#if [ "$1" = "" ]; then
if [ $# -eq 0 ]
then
	echo "No argument supplied"
	exit;
fi
#else
for i in "$@";
do
	echo "$i";
done
#echo "$i"
#echo "$2"
#echo "$3"

