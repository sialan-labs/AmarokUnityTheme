Importer.loadQtBinding("qt.core");
Importer.loadQtBinding("qt.gui");

var envs = QProcess.systemEnvironment()
var founded = false
for( var i=0; i<envs.length; i++ )
    if( envs[i] == "DESKTOP_SESSION=ubuntu" ) {
        founded = true
        break
    }

if( founded ) {
    var prc = new QProcess();
    prc.start( "dconf", ["read", "/org/gnome/desktop/interface/gtk-theme"] );
    prc.waitForStarted();
    prc.waitForFinished();
    var sres = prc.readAll();

    var p = new QProcess()
    if( sres.indexOf("Ambiance",0) != -1 ) {
        var args =[ "--session", "--type=method_call", "--dest=org.kde.amarok" , "/amarok/MainWindow" , "org.qtproject.Qt.QWidget.setStyleSheet" ,  "string:MainToolbar{ background-color: qlineargradient(spread:pad, x1:0, y1:0, x2:0, y2:1, stop:0 #3D3E38, stop:1 #54554B ) ; border-style: solid; border-top: 1px solid #333333; border-bottom: 1px solid #333333  ; color: #ffffff } SlimToolbar{ background-color: qlineargradient(spread:pad, x1:0, y1:0, x2:0, y2:1, stop:0 #3D3E38, stop:1 #54554B ) ; border-style: solid; border-top: 1px solid #333333; border-bottom: 1px solid #333333 ; color: #ffffff } AnimatedLabelStack{ color: #ffffff } MainToolbar QLabel{color: #ffffff} SlimToolbar QLabel{color: #ffffff}" ]
        var p = new QProcess()
        p.start( "dbus-send" , args )
        delete p
    } 
    else
    if( sres.indexOf("Radiance",0) != -1 ) {
        var args =[ "--session", "--type=method_call", "--dest=org.kde.amarok" , "/amarok/MainWindow" , "org.qtproject.Qt.QWidget.setStyleSheet" ,  "string:MainToolbar{ background-color: qlineargradient(spread:pad, x1:0, y1:0, x2:0, y2:1, stop:0 #D7D1C4, stop:1 #EFEBE6 ) ; border-style: solid; border-top: 1px solid #DEDACF; border-bottom: 1px solid #E5E2D9 ; color: #333333 }  SlimToolbar{ background-color: qlineargradient(spread:pad, x1:0, y1:0, x2:0, y2:1, stop:0 #D7D1C4, stop:1 #EFEBE6 ) ; border-style: solid; border-top: 1px solid #DEDACF; border-bottom: 1px solid #E5E2D9 ; color: #333333 } AnimatedLabelStack{ color: #333333 } MainToolbar QLabel{color: #333333} SlimToolbar QLabel{color: #333333}" ]
        var p = new QProcess()
        p.start( "dbus-send" , args )
        delete p
    }
}
