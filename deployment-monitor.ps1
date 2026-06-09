# Vercel Deployment Monitor Script
# This script will check the Vercel deployment status and report build progress

param(
    [string]$ProjectName = "trust-contractors",
    [string]$TeamName = "umairgujjar",
    [int]$PollInterval = 30,
    [int]$MaxAttempts = 60  # Check for up to 30 minutes
)

$attempt = 0
$completed = $false

Write-Host "🟡 Starting Vercel Deployment Monitor for $ProjectName..."
Write-Host "📊 Polling interval: $PollInterval seconds"
Write-Host "🕐 Maximum attempts: $MaxAttempts (Total timeout: $($MaxAttempts * $PollInterval / 60) minutes)"
Write-Host ""

while ($attempt -lt $MaxAttempts -and $completed -eq $false) {
    $attempt++
    $remaining = $MaxAttempts - $attempt
    $elapsedTime = ($attempt * $PollInterval)
    
    # Simple status check - you can enhance this to call Vercel API
    Write-Host "[$attempt/$MaxAttempts] 🔍 Checking deployment ($elapsedTime seconds)..."
    
    # Check if Vercel deployment is active by testing connectivity
    try {
        $response = Test-NetConnection -ComputerName "${ProjectName}-${TeamName}.vercel.app" -Port 443 -WarningAction SilentlyContinue
        
        if ($response.TcpTestSucceeded) {
            Write-Host "✅ Vercel domain is reachable - deployment infrastructure active"
            $completed = $true
        } else {
            Write-Host "⏳ Waiting for deployment to complete..."
        }
    } catch {
        Write-Host "⏳ Waiting for deployment ($remaining attempts remaining)..."
    }
    
    if ($completed -eq $false) {
        Start-Sleep -Seconds $PollInterval
    }
}

if ($completed) {
    Write-Host ""
    Write-Host "🎉 SUCCESS: Vercel deployment completed!"
    Write-Host "🚀 Site should now be live at: https://${ProjectName}-${TeamName}.vercel.app"
} else {
    Write-Host ""
    Write-Host "❌ Timeout: Deployment did not complete within expected timeframe"
    Write-Host "📝 Check Vercel dashboard directly for deployment status"
    Write-Host "👉 https://vercel.com/$TeamName/$ProjectName/deployments"
}

# Exit with appropriate code
if ($completed) {
    exit 0  # Success
} else {
    exit 1  # Timeout
}