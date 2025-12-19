
function createFinderContent() {
    const finderContent = `
    <div class="finder-window">
        <!-- Sidebar -->
        <div class="finder-sidebar">
            <div class="sidebar-group">
                <span class="sidebar-title">Favorites</span>
                <ul>
                    <li class="active">
                         <img src="/assets/icon/dock/finder.png" width="16"> AirDrop
                    </li>
                    <li><img src="/assets/icon/dock/appstore.png" width="16"> Applications</li>
                    <li><img src="/assets/icon/dock/finder.png" width="16"> Desktop</li>
                    <li><img src="/assets/icon/dock/finder.png" width="16"> Documents</li>
                    <li><img src="/assets/icon/dock/finder.png" width="16"> Downloads</li>
                </ul>
            </div>
             <div class="sidebar-group">
                <span class="sidebar-title">iCloud</span>
                <ul>
                    <li><img src="/assets/icon/dock/finder.png" width="16"> iCloud Drive</li>
                </ul>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="finder-main">
            <div class="finder-toolbar">
                <div class="toolbar-nav">
                    <span>&lt;</span> <span>&gt;</span>
                </div>
                <div class="toolbar-title">Desktop</div>
            </div>
            <div class="finder-grid">
                <div class="finder-item">
                    <img src="/assets/icon/dock/finder.png">
                    <span>Folder 1</span>
                </div>
                <div class="finder-item">
                    <img src="/assets/icon/dock/photos.png">
                    <span>Image.jpg</span>
                </div>
                <div class="finder-item">
                     <img src="/assets/icon/dock/notes.png">
                    <span>Notes.txt</span>
                </div>
                <div class="finder-item">
                     <img src="/assets/icon/dock/music.png">
                    <span>Music.mp3</span>
                </div>
            </div>
        </div>
    </div>
    `;
    return finderContent;
}

// Inject logic -> We would likely need to create a dedicated Finder window div in index.html first
// or reuse a generic window template.
