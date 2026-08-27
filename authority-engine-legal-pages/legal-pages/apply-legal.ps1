$root = Join-Path $HOME "Downloads\viral-post-ai-copy-a3d433ac"
Set-Location $root

$srcPages = Join-Path $root "src\pages"
$srcComp = Join-Path $root "src\components"
$public = Join-Path $root "public"
New-Item -ItemType Directory -Force -Path $srcPages, $srcComp, $public | Out-Null

# Files next to this script, or in .\legal-pages
$here = $PSScriptRoot
if (-not $here) { $here = Get-Location }
$from = $here
if (Test-Path (Join-Path $here "legal-pages\Privacy.jsx")) {
  $from = Join-Path $here "legal-pages"
}

Copy-Item (Join-Path $from "Privacy.jsx") (Join-Path $srcPages "Privacy.jsx") -Force
Copy-Item (Join-Path $from "Terms.jsx") (Join-Path $srcPages "Terms.jsx") -Force
Copy-Item (Join-Path $from "Cookies.jsx") (Join-Path $srcPages "Cookies.jsx") -Force
Copy-Item (Join-Path $from "LegalContent.jsx") (Join-Path $srcComp "LegalContent.jsx") -Force
Copy-Item (Join-Path $from "sitemap.xml") (Join-Path $public "sitemap.xml") -Force
Copy-Item (Join-Path $from "robots.txt") (Join-Path $public "robots.txt") -Force

$appPath = Join-Path $root "src\App.jsx"
$app = [System.IO.File]::ReadAllText($appPath)

if ($app -notmatch "pages/Privacy") {
  $app = $app.Replace(
    "import Contact from './pages/Contact';",
    "import Contact from './pages/Contact';`r`nimport Privacy from './pages/Privacy';`r`nimport Terms from './pages/Terms';`r`nimport Cookies from './pages/Cookies';"
  )
}
if ($app -notmatch 'path="/privacy"') {
  $app = $app.Replace(
    '<Route path="/Contact" element={<Contact />} />',
    '<Route path="/Contact" element={<Contact />} />`r`n      <Route path="/privacy" element={<Privacy />} />`r`n      <Route path="/terms" element={<Terms />} />`r`n      <Route path="/cookies" element={<Cookies />} />`r`n      <Route path="/Privacy" element={<Navigate to="/privacy" replace />} />`r`n      <Route path="/Terms" element={<Navigate to="/terms" replace />} />`r`n      <Route path="/Cookies" element={<Navigate to="/cookies" replace />} />'
  )
}
[System.IO.File]::WriteAllText($appPath, $app)

$footerPath = Join-Path $root "src\components\Footer.jsx"
$footer = [System.IO.File]::ReadAllText($footerPath)
if ($footer -notmatch "react-router-dom") {
  $footer = "import { Link } from `"react-router-dom`";`r`n" + $footer
}
if ($footer -notmatch "/privacy") {
  $links = @"
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
        </div>
"@
  if ($footer -match "©") {
    $footer = $footer.Replace("©", ($links + "`r`n        ©"))
  } else {
    $footer = $footer.Replace("</footer>", ($links + "`r`n      </footer>"))
  }
}
[System.IO.File]::WriteAllText($footerPath, $footer)

Write-Host "Legal pages, sitemap, and footer links added."
Write-Host "Next:"
Write-Host "  git add ."
Write-Host "  git commit -m `"Add privacy, terms, cookies, sitemap`""
Write-Host "  git push"
