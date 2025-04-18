@echo off
rmdir /s /q "app\resources\blogs\[id]"
rmdir /s /q "app\api\blogs\[slug]"
echo "Cleanup complete"
