#pragma strict

import System;
import System.IO;

var baseNumber	: int;
var number		: int;

var fileName	: String;
var cs	: String;
var t	: String;

var genres		: String [];
var settings	: String [];
var restrictions: String [];

var g1	: UI.Text;
var g2	: UI.Text;

var s1	: UI.Text;
var s2	: UI.Text;

var r1	: UI.Text;
var r2	: UI.Text;

function Start ()
{
	Generate ();
}

function Update ()
{
	if (Input.GetKeyDown (KeyCode.Space))
	{
		Generate ();
	}
}

function Generate ()
{
	number	= baseNumber;
	while (number > 0)
	{
		g1.text		= genres [UnityEngine.Random.Range (0, genres.length)];
		g2.text		= genres [UnityEngine.Random.Range (0, genres.length)];
	
		s1.text		= settings [UnityEngine.Random.Range (0, settings.length)];
		s2.text		= settings [UnityEngine.Random.Range (0, settings.length)];
	
		r1.text		= restrictions [UnityEngine.Random.Range (0, restrictions.length)];
		r2.text		= restrictions [UnityEngine.Random.Range (0, restrictions.length)];
	
		FileWrite ();
		number --;
	}
}

function FileWrite ()
{
	var append	: FileStream	= new FileStream (fileName, FileMode.Append);	
	var writer	: System.IO.StreamWriter	= new StreamWriter (append);
	
	writer.WriteLine ("(  " + System.DateTime.UtcNow.ToString() + "  )");
	writer.WriteLine ("Genre:        "+g1.text+cs+g2.text+t);
	writer.WriteLine ("Setting:      "+s1.text+cs+s2.text+t);
	writer.WriteLine ("Restrictions: "+r1.text+cs+r2.text+t);
	writer.WriteLine ("-----------------------------------");
	writer.WriteLine ("");
	
	writer.Close ();
	Debug.Log (fileName + "Saved");
}