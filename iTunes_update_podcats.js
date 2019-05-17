var iTunesApp = WScript.CreateObject("iTunes.Application");
iTunesApp.UpdatePodcastFeeds();
//iTunesApp.Close();	//if iTunes no longer wanted on desktop after updating
WScript.Quit();
