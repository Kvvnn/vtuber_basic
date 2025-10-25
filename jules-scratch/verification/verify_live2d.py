from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Listen for all console events and print them to the terminal
        page.on("console", lambda msg: print(f"Browser Console: {msg.text()}"))

        page.goto("http://localhost:4000/live2d")
        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

run()
