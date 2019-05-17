var WshShell = WScript.CreateObject("WScript.Shell");
//WshShell.Run("iTunes");  //if you want to try to open itunes
WScript.Sleep(100);
WshShell.AppActivate("iTunes");
WScript.Sleep(100);
WshShell.SendKeys("%f");
WScript.Sleep(200);
WshShell.SendKeys("%f");
WScript.Sleep(200);
WshShell.SendKeys("y");
WScript.Sleep(200);
WScript.Quit();
