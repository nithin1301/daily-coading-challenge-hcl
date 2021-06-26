function camelCase(word)
{
    let count=0;
    for (let i=0; i<word.length;i++)
    {
        if (word[i]>='A' && word[i]<='Z')
        {
            count++;
        }
    }
    return count;
}
let word= "Save Changes In The Editor ";
document.write( camelCase(word));
